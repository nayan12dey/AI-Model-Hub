
import React, { useState } from 'react';

const ModelCard = ({ model, carts, setCarts }) => {
    // console.log(title, description, price)

    // console.log(carts)

     const [isSubscribed, setIsSubscribed] = useState(false);

     const handleSubscription = () => {
        setIsSubscribed(true);
        setCarts([...carts,model]);
     }

    return (
        <div className='shadow-lg rounded-lg border p-5 overflow-hidden border-zinc-200'>
            <div className='flex justify-center h-56 bg-zinc-200 p-4 items-center rounded-xl'>
                <img className='h-40 w-40 object-contain' src={model.image} alt="" />
            </div>

            <div className='space-y-2 mt-2'>
                <h2 className='text-2xl font-bold'>{model.title}</h2>
                <p>{model.description}</p>
                <div className='text-2xl font-bold'>${model.price}/month</div>
                <button onClick={handleSubscription} className='btn bg-red-500 w-full text-white rounded-lg mt-5'>{isSubscribed ? "Subscibed" : "Subscribe Now"}</button>
            </div>


        </div>
    );
};

export default ModelCard;