import crypto from 'node:crypto';
function json(res,status,body){res.status(status).setHeader('Content-Type','application/json').json(body);}
export default async function handler(req,res){
 if(req.method!=='POST'){res.setHeader('Allow','POST');return json(res,405,{verified:false,error:'Method not allowed'});}
 const secret=process.env.RAZORPAY_KEY_SECRET,keyId=process.env.RAZORPAY_KEY_ID;
 if(!secret||!keyId)return json(res,503,{verified:false,error:'Payment verification is not configured.'});
 try{
 const b=req.body||{};
 if(b.razorpay_order_id&&b.razorpay_payment_id&&b.razorpay_signature){
 const expected=crypto.createHmac('sha256',secret).update(b.razorpay_order_id+'|'+b.razorpay_payment_id).digest('hex'),actual=String(b.razorpay_signature),a=Buffer.from(expected,'hex'),c=Buffer.from(actual,'hex');
 if(a.length!==c.length||!crypto.timingSafeEqual(a,c))return json(res,400,{verified:false,error:'Payment signature could not be verified.'});
 const pr=await fetch('https://api.razorpay.com/v1/payments/'+encodeURIComponent(b.razorpay_payment_id),{headers:{Authorization:'Basic '+Buffer.from(keyId+':'+secret).toString('base64')}}),p=await pr.json();
 if(!pr.ok||!['captured','authorized'].includes(p.status)||p.order_id!==b.razorpay_order_id)return json(res,400,{verified:false,error:'Payment is not yet confirmed as successful.'});
 return json(res,200,{verified:true,paymentId:p.id});
 }
 if(b.razorpay_subscription_id&&b.razorpay_payment_id&&b.razorpay_signature){
 const expected=crypto.createHmac('sha256',secret).update(b.razorpay_payment_id+'|'+b.razorpay_subscription_id).digest('hex'),actual=String(b.razorpay_signature),a=Buffer.from(expected,'hex'),c=Buffer.from(actual,'hex');
 if(a.length!==c.length||!crypto.timingSafeEqual(a,c))return json(res,400,{verified:false,error:'Subscription signature could not be verified.'});
 return json(res,200,{verified:true,paymentId:b.razorpay_payment_id,subscriptionId:b.razorpay_subscription_id});
 }
 return json(res,400,{verified:false,error:'Required Razorpay verification fields are missing.'});
 }catch(e){return json(res,500,{verified:false,error:'Could not verify payment right now.'});}
}