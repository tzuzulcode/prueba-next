const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function createCheckoutSession(req,res){
  console.log(req.headers.host)  
  if(req.method==="POST"){
      try{
        const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1KTdlUCxJ8HWxsAUk6ArDlNc',
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/cart?success=true`,
            cancel_url: `${req.headers.origin}/cart?canceled=true`,
        });
        
        console.log(session.url)
        
        return res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
        
    }
}