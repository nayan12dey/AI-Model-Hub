
import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise }) => {

    const models = use(modelPromise);
    
   



    return (
        <div className='py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p className=''>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-10 max-w-7xl mx-auto'>
                {
                    models.map(model => <ModelCard key={model.id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default Models;


