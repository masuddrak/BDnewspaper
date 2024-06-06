import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Stripe/CheckoutForm";


const stripePromise = loadStripe("pk_test_51PL5mfFwJGWV6jk7A2S5GBJJENsVJVX1cx3jB8f1flb9uWD7R7JHNvuRcZhEw3BeBuTx4q9tHuTgktKL4sQiBRBF00DRf7J9Ee");

const Subscription = () => {
    
    const [subscriptionItem, setSubscriptionItem] = useState("60000-5")
    const subscriptionLilimt = parseInt(subscriptionItem.split("-")[0])
    const subscriptionPrice = parseInt(subscriptionItem.split("-")[1])
    console.log(subscriptionLilimt)
   
    return (
        <div className="w-[400px] mx-auto space-y-10 " >
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