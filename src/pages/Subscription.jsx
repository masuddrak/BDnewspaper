import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Stripe/CheckoutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_TOKEN);

const Subscription = () => {
    
    const [subscriptionItem, setSubscriptionItem] = useState("60000-5")
    const subscriptionLilimt = parseInt(subscriptionItem.split("-")[0])
    const subscriptionPrice = parseInt(subscriptionItem.split("-")[1])
    console.log(subscriptionLilimt)
   
    return (
        <div className="w-[400px] mx-auto space-y-10 " >
            <Helmet>
                    <title>Subscription</title>
                </Helmet>
            <div className="flex justify-center">
                <select required name="name" onChange={(e) => setSubscriptionItem(e.target.value)} className="border-2 border-gray-800 w-full px-3 py-1">

                    <option value="60000-5">1minite-$5</option>
                    <option value="432000000-20">5days-$20</option>
                    <option value="864000000-50">10days-$50</option>
                </select>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm subscriptionPrice={subscriptionPrice} subscriptionLilimt={subscriptionLilimt}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Subscription;