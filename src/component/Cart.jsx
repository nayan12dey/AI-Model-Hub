
import React from 'react';

const Cart = ({ carts }) => {
    // console.log(carts)

    const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0)

    console.log(totalPrice)


    return (
        <div className='py-12'>
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-5xl font-bold  tracking-tighter">Your Cart</h1>
                </div>

                <div className='space-y-6'>
                    {
                        carts.map(cart => <div className='flex justify-between items-center gap-3 border rounded-lg p-3' key={cart.id}>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img className='h-20 w-20 object-contain' src={cart.image} alt="" />
                                </div>

                                <div>
                                    <h2 className='text-xl font-bold'>{cart.title}</h2>
                                </div>
                            </div>

                            <div className='text-3xl font-bold'>${cart.price}/month</div>
                        </div>)
                    }
                </div>

                <div className='bg-black mt-10 text-5xl rounded-xl flex justify-between items-center text-white p-10 font-bold'>
                    <div className=''>Total</div>
                    <div className=''>{totalPrice}</div>
                </div>


            </div>
        </div>
    );
};

export default Cart;