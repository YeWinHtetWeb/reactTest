import React from 'react';
import "./cssFile/Button.css";


function Button({clickEventHandling}) {
  return (
    <div className='btn-container'>
      <div className='btn-group'>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>AC</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>(</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>)</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>DEL</button>
      </div>
      <div className='btn-group'>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>7</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>8</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>9</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>+</button>
      </div>
      <div className='btn-group'>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>4</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>5</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>6</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>-</button>
      </div>
      <div className='btn-group'>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>1</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>2</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>3</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>*</button>
      </div>
      <div className='btn-group'>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>0</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>00</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>.</button>
        <button onClick={(e)=> clickEventHandling(e.target.innerText)}>/</button>
      </div>
      <div className='btn-group'>
        <button className='equal' onClick={(e)=> clickEventHandling(e.target.innerText)}>=</button>
      </div>
    </div>
  );
}

export default Button;