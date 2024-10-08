import React from 'react'

export const Button = (props) => {
    return (
      <div>
          <button  className={`px-5 py-3 btn rounded-pill my-3 fw-semibold ${props.bgColor}`} 
          style={{ backgroundColor: props.bgColor }}>{props.btnText}</button>
      </div>
    )
  }
