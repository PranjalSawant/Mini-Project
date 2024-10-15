import React from 'react'
import banner from '../assets/banner.png'
import { Button } from '../components/Button'
import { Titles } from '../components/Titles'
import CategorySlider from '../components/Slider'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { HowItWorks } from '../components/HowItWorks'


export const Homepage = () => {
  return ( <>
        <div className="py-5"></div>
        <div className="py-4"></div>

    <div className='container'>
        
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
            <HowItWorks/>
        </div>
       
    </div>
    <div className="py-5"></div>
    <WhyChooseUs/>
    <div className="py-5"></div>
    <Titles textColor="text-olive" heading="Items We Collect for Recycling"/>
    <CategorySlider/>
    <div className="py-5"></div>
    </>
  )
}
