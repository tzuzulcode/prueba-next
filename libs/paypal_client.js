import paypal from '@paypal/checkout-server-sdk'

//console.log(process.env.NODE_ENV)
const env = process.env.NODE_ENV
const clientId = process.env.PAYPAL_CLIENT_ID
const clientSecret = process.env.PAYPAL_CLIENT_SECRET

const environment = env ==="development" ? 
new paypal.core.SandboxEnvironment(clientId,clientSecret):
new paypal.core.LiveEnvironment(clientId,clientSecret)

const client = new paypal.core.PayPalHttpClient(environment)

export default client