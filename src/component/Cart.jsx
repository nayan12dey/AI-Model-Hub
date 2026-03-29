
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    // console.log(carts)

    const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0)

    console.log(totalPrice)

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successful!")
    }

    const handleDelete = (item) => {
        console.log("delete clicked", item);
        toast.success("Item deleted!")

        const filteredArray = carts.filter(cart => cart.id !== item.id)
        console.log(filteredArray);
        setCarts(filteredArray);
    }


    return (
        <div className='py-12'>
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-5xl font-bold  tracking-tighter">Your Cart</h1>

                    {
                        carts.length === 0 ? (<p className='text-center text-2xl p-5'>Cart is empty</p>)
                            : (
                                <>
                                    <div className="space-y-5 mt-4">
                                        {carts.map((item) => (
                                            <div
                                                className="flex items-center justify-between border rounded-lg p-3"
                                                key={item.id}
                                            >
                                                <div className="flex  items-center gap-2">
                                                    <div>
                                                        <img
                                                            className="h-20 w-20 object-contain"
                                                            src={item.image}
                                                        />
                                                    </div>

                                                    <div>
                                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                                    </div>
                                                </div>

                                                <div className="flex gap-10">
                                                    <div className="text-3xl font-bold">${item.price}/month</div>
                                                    <button onClick={() => handleDelete(item)} className='btn rounded-full btn-error'>X</button>

                                                    
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className=" flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
                                        <div>Total</div>
                                        <div>$ {totalPrice}</div>
                                    </div>

                                    <button
                                        onClick={handlePayment}
                                        className="btn w-full mt-5 bg-red-500 text-white text-4xl  rounded-lg p-10"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </>
                            )
                    }
                </div>






            </div>
        </div>
    );
};

export default Cart;




