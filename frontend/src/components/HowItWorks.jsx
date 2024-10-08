import React from 'react'
import trash from '../assets/trash.png'
import truck from '../assets/truck.png'
import cash from '../assets/money.png'
export const HowItWorks = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-4">
        <div className="card mb-3 border-0 rounded-5">
            <div className="card-body bg-grey rounded-5 p-4">
                <div className='p- 5'>
                    <img src={trash} alt='' className='img-fluid w-100'/>
                </div>
                <h5 className="card-title">Step 1</h5>
                <p className="card-text">Upload your waste details.</p>
            </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="card mb-3 border-0 rounded-5">
            <div className="card-body bg-grey rounded-5 p-4">
            <div className='p-5'>
                <img src={truck} alt='' className='img-fluid w-100'/>
                </div>
                <h5 className="card-title">Step 2</h5>
                <p className="card-text">Receive a quote and schedule a pickup.</p>
            </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="card mb-3 border-0 rounded-5">
            <div className="card-body bg-grey rounded-5 p-4">
            <div className='p-5'>
                <img src={cash} alt='' className='img-fluid w-100'/>
                </div>
                <h5 className="card-title">Step 3</h5>
                <p className="card-text">Get paid when your waste is sold!</p>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}
