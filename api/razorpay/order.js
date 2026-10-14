import crypto from 'node:crypto';
const allowed=new Set(['general','education','healthcare','women','community']);
function json(res,status,body){res.status(status).setHeader('Content-Type','application/json').json(body);}
export default async function handler(req,res){
 if(req.method!=='POST'){res.setHeader('Allow','POST');return json(res,405,{error:'Method not allowed'});}
 const keyId=process.env.RAZORPAY_KEY_ID,secret=process.env.RAZORPAY_KEY_SECRET;
 if(!keyId||!secret)return json(res,503,{error:'Donations are not fully configured yet. Please contact info@gift.ngo.'});
 try{const {amount,campaign,donor,anonymous}=req.body||{};const rupees=Number(amount);
 if(!Number.isSafeInteger(rupees)||rupees<100||rupees>10000000)return json(res,400,{error:'Donation amount must be between ₹100 and ₹1,00,00,000.'});
 if(!allowed.has(campaign))return json(res,400,{error:'Please choose a valid donation cause.'});
 if(!donor||typeof donor.name!=='string'||donor.name.trim().length<1||donor.name.length>120||typeof donor.email!=='string'||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email)||donor.email.length>254)return json(res,400,{error:'Please provide a valid name and email address.'});
 const notes={campaign,donor_name:donor.name.trim().slice(0,120),donor_email:donor.email.trim().slice(0,254),anonymous:anonymous?'yes':'no',source:'gift.ngo'};
 const response=await fetch('https://api.razorpay.com/v1/orders',{method:'POST',headers:{Authorization:'Basic '+Buffer.from(keyId+':'+secret).toString('base64'),'Content-Type':'application/json'},body:JSON.stringify({amount:rupees*100,currency:'INR',receipt:'gift_'+crypto.randomUUID().replace(/-/g,'').slice(0,20),notes})});const data=await response.json();
 if(!response.ok)return json(res,502,{error:'Razorpay could not create a payment order. Please try again later.'});
 return json(res,200,{keyId,orderId:data.id,amount:data.amount,currency:data.currency});
 }catch(e){return json(res,500,{error:'Unable to start checkout right now.'});}
}