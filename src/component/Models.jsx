
import React from 'react';

const Models = ({age, setAge}) => {
    
    const data = {
        name: "Nayan",
        age: 21
    }
    console.log(data)
    return (
        <div>
            Models:
            <div> Name:{data.name}</div>
            <div>Age:{age}</div>

            <button onClick={() => setAge(30)}>Send Age to App</button>

        </div>
    );
};

export default Models;


