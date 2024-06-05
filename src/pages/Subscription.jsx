import { useState } from "react";

const Subscription = () => {
    const [subscriptionItem, setSubscriptionItem] = useState("")
    const subscriptionLilimt = parseInt(subscriptionItem.split("-")[0])
    const subscriptionPrice = parseInt(subscriptionItem.split("-")[1])
    console.log(subscriptionLilimt, subscriptionPrice)
    console.log(subscriptionItem)
    return (
        <div className="w-[400px] mx-auto space-y-3">
            <select required name="name" onChange={(e) => setSubscriptionItem(e.target.value)} className="border-2 border-gray-800 px-3 py-1">
                <option value="60000-5">1minite-$5</option>
                <option value="432000000-20">5days-$20</option>
                <option value="864000000-50">10days-$50</option>
            </select>
            <div>
                <button className="border-2 bg-gray-800 text-white px-3">Pay Now</button>
            </div>
        </div>
    );
};

export default Subscription;