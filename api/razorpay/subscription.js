function json(res,status,body){res.status(status).setHeader('Content-Type','application/json').json(body);}
export default async function handler(req,res){
 if(req.method!=='POST'){res.setHeader('Allow','POST');return json(res,405,{error:'Method not allowed'});}
 const keyId=process.env.RAZORPAY_KEY_ID,secret=process.env.RAZORPAY_KEY_SECRET;
 if(!keyId||!secret)return json(res,503,{error:'Donations are not fully configured yet. Please contact info@gift.ngo.'});
 try{
 const {amount,campaign,donor,anonymous,frequency}=req.body||{};const rupees=Number(amount);
 if(!Number.isSafeInteger(rupees)||rupees<100||rupees>10000000)return json(res,400,{error:'Donation amount must be between ₹100 and ₹1,00,00,000.'});
 if(!['general','education','healthcare','women','community'].includes(campaign))return json(res,400,{error:'Please choose a valid donation cause.'});
 if(!donor||typeof donor.name!=='string'||!donor.name.trim()||typeof donor.email!=='string'||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email))return json(res,400,{error:'Please provide a valid name and email address.'});
 if(!['monthly','yearly'].includes(frequency))return json(res,400,{error:'Unsupported recurring frequency.'});
 const auth={Authorization:'Basic '+Buffer.from(keyId+':'+secret).toString('base64'),'Content-Type':'application/json'};
 const planResponse=await fetch('https://api.razorpay.com/v1/plans',{method:'POST',headers:auth,body:JSON.stringify({period:frequency==='monthly'?'monthly':'yearly',interval:1,item:{name:'Gift Charitable Trust '+frequency+' donation',amount:rupees*100,currency:'INR',description:'Recurring donation for '+campaign+' via gift.ngo'}})});
 const plan=await planResponse.json();if(!planResponse.ok)return json(res,502,{error:'Razorpay could not set up this recurring amount. Confirm recurring payments are enabled for your account.'});
 const response=await fetch('https://api.razorpay.com/v1/subscriptions',{method:'POST',headers:auth,body:JSON.stringify({plan_id:plan.id,total_count:120,quantity:1,customer_notify:1,notes:{campaign,donor_name:donor.name.trim().slice(0,120),donor_email:donor.email.trim().slice(0,254),anonymous:anonymous?'yes':'no',source:'gift.ngo'}})});
 const data=await response.json();if(!response.ok)return json(res,502,{error:'Razorpay could not create a recurring donation. Confirm recurring payments are enabled for your account.'});
 return json(res,200,{keyId,subscriptionId:data.id,currency:'INR',amount:rupees*100});
 }catch(e){return json(res,500,{error:'Unable to start recurring checkout right now.'});}
}