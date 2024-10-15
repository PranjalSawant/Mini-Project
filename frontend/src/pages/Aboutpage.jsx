import React from 'react';
import { Titles } from '../components/Titles';
import hero from '../assets/abouthero.png';
import { Button } from '../components/Button';
import mission from '../assets/mission.png';
import { WhyChooseUs } from '../components/WhyChooseUs';
import CategorySlider from '../components/Slider';
import { HowItWorks } from '../components/HowItWorks';
import { Link } from 'react-router-dom';
export const Aboutpage = () => {
  return (
    <div className=''>
      <div className='container'>
        <Titles textColor="text-olive" heading="Transforming Trash into Treasure, One Recyclable at a Time" />
        <img src={hero} className='img-fluid w-100 rounded-5' alt="" />
        <p className='pt-5 text-center'>At <b>Trash to Cash</b>, we are redefining the way people perceive waste. By providing a platform where recyclables meet demand,<br /> we aim to transform waste into wealth while fostering a greener planet.</p>
        <div className="d-flex">
          <div className="m-auto">
            <Link to="/contact"><Button btnText="Join Us!" bgColor="btn-success" /></Link>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <div className='bg-olive'>
        <div className="py-5"></div>
        <Titles textColor="text-white" heading="Empowering You to Build a Sustainable Tomorrow" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className='d-flex'>
                <div className="m-auto">
                  <img src={mission} alt="" className='img-fluid' />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" p-5">
                <p className='text-white  '>At Trash to Cash, our mission is to create a sustainable ecosystem where waste is no longer discarded but given new life. We believe in the power of a circular economy, where every recyclable material is repurposed, reducing the strain on natural resources and minimizing environmental impact.<br /><br />

                  Through our platform, we aim to connect individuals and businesses, making recycling easy, profitable, and impactful. Together, we’re building a greener, cleaner future—one piece of recyclable waste at a time.</p>
                <Link to="/contact"><Button btnText="Get Started" bgColor="btn-white" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>

      </div>
      <div className="py-5"></div>
      <Titles textColor="text-olive" heading="The Smarter, Greener Choice for Your Recycling Needs" />
      <HowItWorks />
      <div className="py-5"></div>
      <WhyChooseUs />
      <div className="py-5"></div>
      <Titles textColor="text-olive" heading="Items We Collect for Recycling" />
      <CategorySlider />
    </div>
  )
}
