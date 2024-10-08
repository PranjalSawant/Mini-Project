import React from 'react'

export const Titles = (props) => {
  return (
    <div>
        <h2 className={`text-center fw-bold py-5 ${props.textColor}`}>{props.heading}</h2>
    </div>
  )
}
