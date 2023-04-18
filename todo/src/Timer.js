import React, { useState, useEffect } from 'react';

function Timer () {

    const [counter, setCount] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(function (count) {
               return count + 1; 
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>You have been doing stuff for {counter} seconds</h3>
        </div>
    );
}

export default Timer;
