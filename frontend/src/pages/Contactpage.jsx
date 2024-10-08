import React from 'react'
import contact from '../assets/contact.png'
import { Titles } from '../components/Titles'
export const Contactpage = () => {
  return (
    <div className='container'>
      <div className="py-5"></div>
      <div className="row">
          <div className="col-lg-6">
          <img src={contact} alt="" className='img-fluid rounded-5 w-100' />
          </div>
          <div className="col-lg-6">
            <div className='p-5 d-flex'>
              <div className="m-auto">
              <Titles textColor="text-olive" heading="We’d Love to Hear From You"/>
            <p className='fw-semibold text-olive text-center'>Whether you have a question, want to know more about our platform, or need assistance, we’re here to help. Let’s work together to make a positive impact!</p>
           <div className="d-flex py-3">
           <div className='m-auto'>
            <p className='my-1'><span className='text-olive fw-semibold'>Email: </span> <a href="mailto:info@trashtocash.com" className="text-olive text-decoration-none">info@trashtocash.com</a></p>
            <p className='my-1'><span className='text-olive fw-semibold'>Phone: </span><a href="tel:+18001234567" className="text-olive text-decoration-none">+1 800 123 4567</a></p>
            <p className='my-1'><span className='text-olive fw-semibold'>Address:</span> 123 Green Street, Eco City, Earth</p>
            </div>
           </div>
              </div>
            </div>
          </div>
      </div>
      <div className="py-5"></div>
    </div>
  )
}
