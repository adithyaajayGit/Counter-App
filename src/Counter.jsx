import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './Redux/CounterSlice';

const Counter = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.count)
  const [amount, setAmount] = useState("")

  const handleClick = () => {
    if (amount == "") {
      alert("please enter the number properly")
    } else {
      //update values to store
      dispatch(incrementByAmount(Number(amount)))
      // setAmount("") //optionaly make input field blank after increment
    }
  }

  return (
    <div className="container border border-white p-5 mt-4" style={{ maxWidth: '600px' }}>
      <h1 className="text-white text-center">Counter Application</h1>
      <div>
        <h1 className="text-white text-center my-4" style={{ fontSize: '48px' }}>
          {count}
        </h1>
      </div>
      <div className="d-flex justify-content-center gap-2 my-4">
        <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
        <button className="btn btn-danger" onClick={() => dispatch(reset())}>Reset</button>
        <button className="btn btn-warning" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div className="d-flex justify-content-center gap-2 mt-4">
        <input onChange={(e) => setAmount(e.target.value)} type="text" className="form-control w-auto" placeholder="Enter amount" />
        <button onClick={handleClick} className="btn btn-primary" >Increment Amount</button>
      </div>
    </div>
  );
}

export default Counter;
