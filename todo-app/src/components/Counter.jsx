import {useState} from 'react';

function Counter() {

    const [counter,setCounter] = useState(0);
    function increamentCounter ()
    {
        setCounter(counter+1);
    }
    function decreamentCounter ()
    {
        if(counter>0)
        setCounter(counter-1);
    }

return(
    <div className='text-center mt-5'>
        <h1>{counter}</h1>
        <div className='my-5'>
        <button className='btn btn-primary mx-3 ' onClick={increamentCounter}>Increament Counter</button>
        <button className='btn btn-danger' onClick={decreamentCounter}>Decreament Counter</button>
        </div>
    </div>   
);
}
export default Counter;