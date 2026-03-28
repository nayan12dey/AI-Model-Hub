
import React, { use } from 'react';

const Models = ({ modelPromise }) => {

    const models = use(modelPromise);
    console.log(models);



    return (
        <div className='py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p className=''>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-10 max-w-7xl mx-auto'>
                {
                    models.map(model => <div className='shadow-lg rounded-lg border p-5 overflow-hidden border-zinc-200'>
                        <div className='flex justify-center h-56 bg-zinc-200 p-4 items-center rounded-xl'>
                            <img className='h-40 w-40 object-contain' src={model.image} alt="" />
                        </div>

                        <div className='space-y-2 mt-2'>
                            <h2 className='text-2xl font-bold'>{model.title}</h2>
                            <p>{model.description}</p>
                            <div className='text-2xl font-bold'>${model.price}/month</div>
                            <button className='btn bg-red-500 w-full text-white rounded-lg mt-5'>Subscribe Now</button>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default Models;


