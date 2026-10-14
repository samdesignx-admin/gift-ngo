import crypto from 'node:crypto';
function json(res,status,body){res.status(status).setHeader('Content-Type','application/json').json(body);}
function auth(keyId,secret){return {Authorization:'Basic '+Buffer.from(keyId+':'+secret).toString('base64')};}
async function getPayment(id,keyId,secret){const r=await fetch('https://api.razorpay.com/v1/payments/'+encodeURIComponent(id),{headers:auth(keyId,secret)});return {ok:r.ok,data:await r.json()};}
export default async function handler(req,res){
 if(req.method!=='POST'){res.setHeader('Allow','POST');return json(res,405,{verified:false,error:'Method not allowed'});}
 const secret=process.env.RAZORPAY_KEY_SECRET,keyId=process.env.RAZORPAY_KEY_ID;
 if(!secret||!keyId)return json(res,503,{verified:false,error:'Payment verification is not configured.'});
 try{
  const b=req.body||{};
  if(b.razorpay_order_id&&b.razorpay_payment_id&&b.razorpay_signature){
   const expected=crypto.createHmac('sha256',secret).update(b.razorpay_order_id+'|'+b.razorpay_payment_id).digest('hex'),actual=String(b.razorpay_signature),a=Buffer.from(expected,'hex'),c=Buffer.from(actual,'hex');
   if(a.length!==c.length||!crypto.timingSafeEqual(a,c))return json(res,400,{verified:false,error:'Payment signature could not be verified.'});
   let {ok,data:p}=await getPayment(b.razorpay_payment_id,keyId,secret);
   if(!ok||p.order_id!==b.razorpay_order_id)return json(res,400,{verified:false,error:'The donation payment could not be confirmed.'});
   if(Number.isSafeInteger(Number(b.amount))&&Number(b.amount)>0&&p.amount!==Number(b.amount)*100)return json(res,400,{verified:false,error:'The verified payment amount does not match the donation amount.'});
   // Some Razorpay accounts return an authorised payment before capture. Capture it server-side before showing success.
   if(p.status==='authorized'){
    const cr=await fetch('https://api.razorpay.com/v1/payments/'+encodeURIComponent(p.id)+'/capture',{method:'POST',headers:{...auth(keyId,secret),'Content-Type':'application/json'},body:JSON.stringify({amount:p.amount,currency:p.currency||'INR'})});
    const captured=await cr.json();
    if(cr.ok){p=captured;}
    else if(captured?.error?.code!=='BAD_REQUEST_ERROR'){
     return json(res,502,{verified:false,error:'Payment was authorised but capture is still pending. Please do not donate again; contact care@gift.ngo with your payment reference.'});
    }
    if(!cr.ok){const refreshed=await getPayment(b.razorpay_payment_id,keyId,secret);if(refreshed.ok)p=refreshed.data;}
   }
   if(p.status!=='captured')return json(res,409,{verified:false,error:'Payment has not been captured yet. Please do not retry the donation; contact care@gift.ngo with your payment reference.'});
   const or=await fetch('https://api.razorpay.com/v1/orders/'+encodeURIComponent(b.razorpay_order_id),{headers:auth(keyId,secret)}),o=await or.json();
   if(!or.ok||o.id!==p.order_id)return json(res,400,{verified:false,error:'The donation order could not be confirmed.'});
   const notes=o.notes||{};
   return json(res,200,{verified:true,paymentId:p.id,orderId:o.id,amount:p.amount/100,currency:p.currency,paymentDate:p.created_at,captured:p.captured===true,method:p.method||null,donor:{name:notes.donor_name||'',email:notes.donor_email||''},campaign:notes.campaign||'general',anonymous:notes.anonymous==='yes'});
  }
  if(b.razorpay_subscription_id&&b.razorpay_payment_id&&b.razorpay_signature){
   const expected=crypto.createHmac('sha256',secret).update(b.razorpay_payment_id+'|'+b.razorpay_subscription_id).digest('hex'),actual=String(b.razorpay_signature),a=Buffer.from(expected,'hex'),c=Buffer.from(actual,'hex');
   if(a.length!==c.length||!crypto.timingSafeEqual(a,c))return json(res,400,{verified:false,error:'Subscription signature could not be verified.'});
   const {ok,data:p}=await getPayment(b.razorpay_payment_id,keyId,secret);
   if(!ok||p.status!=='captured')return json(res,400,{verified:false,error:'The subscription payment is not yet confirmed as successful.'});
   return json(res,200,{verified:true,paymentId:p.id,subscriptionId:b.razorpay_subscription_id,amount:p.amount/100,currency:p.currency,paymentDate:p.created_at,captured:p.captured===true,method:p.method||null});
  }
  return json(res,400,{verified:false,error:'Required Razorpay verification fields are missing.'});
 }catch(e){return json(res,500,{verified:false,error:'Could not verify payment right now.'});}
}