import React from 'react'
import banner from '../assets/banner.png'
import { Button } from '../components/Button'
import { Titles } from '../components/Titles'
import trash from '../assets/trash.png'
import truck from '../assets/truck.png'
import cash from '../assets/money.png'
export const Homepage = () => {
  return ( <>
    <div className='container'>
        <div className="py-5"></div>
        
        <div>
            <img src={banner} alt="" className='rounded-5 img-fluid w-100' />
        </div>
        <div className='py-5'>
            <p className='text-center lh-base fs-5 mukta-regular'>Ever wondered what’s lurking in your trash bin that could actually be cash? Welcome to <b>Trash to Cash</b>, where we give your recyclables a second chance to shine –and make you some money while we’re at it! Whether you’ve got piles of paper, bags of bottles, or mounds of metal,<br/> we connect you with businesses eager to turn your trash into their raw material.</p>
            <div className="d-flex">
                <div className="m-auto">
                <Button btnText="Got Waste? Let’s Cash It!" bgColor="btn-success"/>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <Titles textColor="text-olive" heading="Turning Trash Into Cash, One Step at a Time"/>
            <div className="py-4"></div>
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
        </div>
       
    </div>
    <div className="py-5"></div>
    <div className='py-5 bg-olive'>
            <Titles textColor="text-white" heading="Why Trash to Cash is the Perfect Match"/>
        </div>
    </>
  )
}
