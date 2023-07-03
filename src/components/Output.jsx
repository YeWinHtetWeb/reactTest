import React from 'react';
import "./cssFile/Output.css";

const Output = ({output}) => {
  return (
    <div className='outputText'>
      {output}
    </div>
  )
}

export default Output;