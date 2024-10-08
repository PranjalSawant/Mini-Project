import React from 'react'
import effortless from '../assets/effortless.png'
import fastpayment from '../assets/fast.png'
import ecofriendly from '../assets/ecofriendly.png'
import { Titles } from './Titles'
export const WhyChooseUs = () => {
  return (
    <div className='py-5 bg-olive'>
    <Titles textColor="text-white" heading="Why Trash to Cash is the Perfect Match"/>
    <div className="container text-white">
        <div className="row">
            <div className="col-lg-6 d-flex">
                <div className='m-auto'>
                    <h3 className='py-3 fw-semibold'> Effortless Process</h3>
                    <p>From uploading your waste details to getting paid, Trash to Cash simplifies recycling. Our seamless process ensures that you can turn waste into cash with just a few clicks, without any hassle.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-5">
                <img src={effortless} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
        <div className="row">
        <div className="col-lg-6">
                <div className="p-5">
                <img src={fastpayment} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-6 d-flex">
                <div className='m-auto'>
                    <h3 className='py-3 fw-semibold'> Fast Payments & Fair Quotes</h3>
                    <p>From uploading your waste details to getting paid, Trash to Cash simplifies recycling. Our seamless process ensures that you can turn waste into cash with just a few clicks, without any hassle.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 d-flex">
                <div className='m-auto'>
                    <h3 className='py-3 fw-semibold'>Eco-Friendly & Impactful</h3>
                    <p>By choosing Trash to Cash, you're actively contributing to the circular economy. Help reduce landfill waste and support sustainability, all while earning money for your recyclables.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-5">
                <img src={ecofriendly} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
