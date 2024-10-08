import React from "react";
import Slider from "react-slick";
import plastic from '../assets/plastic.png';
import paper from '../assets/paper.png';
import ewaste from '../assets/e-waste.png';
import clothes from '../assets/clothes.png';

function CategorySlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={plastic} alt="" className='img-fluid' />
                </div>
                <div>
                    <img src={paper} alt="" className='img-fluid' />
                </div>
                <div>
                    <img src={ewaste} alt="" className='img-fluid' />
                </div>
                <div>
                    <img src={clothes} alt="" className='img-fluid' />
                </div>
            </Slider>
        </div>
    );
}

export default CategorySlider;
