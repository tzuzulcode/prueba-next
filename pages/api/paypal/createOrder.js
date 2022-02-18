import paypal from '@paypal/checkout-server-sdk'

//console.log(process.env.NODE_ENV)
const env = process.env.NODE_ENV
const clientId = process.env.PAYPAL_CLIENT_ID
const clientSecret = process.env.PAYPAL_CLIENT_SECRET

const environment = env ==="development" ? 
new paypal.core.SandboxEnvironment(clientId,clientSecret):
new paypal.core.LiveEnvironment(clientId,clientSecret)

const client = new paypal.core.PayPalHttpClient(environment)


export default async function createOrder(req,res){
    const request = new paypal.orders.OrdersCreateRequest()
    request.headers["Prefer"] = "return=representation"
    request.requestBody({
        intent:"CAPTURE",
        purchase_units:[
            {
                amount:{
                    currency_code:'USD',
                    value:'10000'
                }
            }
        ]
    })

    const response = await client.execute(request)

    if(response.statusCode!==201){
        res.status(400)
    }
    console.log("Order id",response.result.id)

    return res.json({orderID:response.result.id})
}