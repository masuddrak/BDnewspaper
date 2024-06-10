import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckoutForm = ({  subscriptionPrice,subscriptionLilimt }) => {
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure()
    const naviget =useNavigate()
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (subscriptionPrice > 1) {
            getPayment({ price: subscriptionPrice })
        }
    }, [subscriptionPrice]);
    const getPayment = async (price) => {
        const { data } = await axiosSecure.post("/create-payment-intent", price)
        console.log("client secret", data.clientSecret)
        setClientSecret(data.clientSecret)
    }
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            return
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError("")
        }

        const {error:intetentError,paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                }
            }
        });
        if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Handle successful payment here
            const sendUserData = {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
                role: "premium",
                date:(new Date()).getTime()+subscriptionLilimt
              }
              try {
                const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/user`, sendUserData)
                console.log(data)
                toast.success("your payment success!!")
                naviget("/premium-articles")
              } catch (error) {
                console.log(error)
              }
        } else {
            setCardError(intetentError)
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex mt-4 justify-center gap-5'>
                    <button
                        disabled={!stripe || !clientSecret}
                        type="submit"
                        className='inline-flex w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white '

                    >
                        pay ${subscriptionPrice}
                    </button>
                  
                </div>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm