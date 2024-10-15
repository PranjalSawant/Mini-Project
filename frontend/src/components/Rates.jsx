import React from 'react'
import { Titles } from './Titles'
import Paper from '../assets/rate1.png'
import Plastic from '../assets/rate2.png'
import EWaste from '../assets/rate3.png'
import Metal from '../assets/rate4.png'
import { Link } from 'react-router-dom'

export const Rates = () => {
    const wasteData = {
        "wasteCategories": [
            {
                "category": "Paper",
                "image": Paper,
                "items": [
                    { "name": "Newspaper", "price": "₹10", "unit": "Kg" },
                    { "name": "Books", "price": "₹10", "unit": "Kg" },
                    { "name": "Carton", "price": "₹10", "unit": "Kg" },
                    { "name": "Magazines", "price": "₹7", "unit": "Kg" },
                    { "name": "White Papers", "price": "₹8", "unit": "Kg" },
                    { "name": "Grey Board", "price": "₹2", "unit": "Kg" },
                    { "name": "Record Paper", "price": "₹7", "unit": "Kg" },
                    { "name": "Plain Paper", "price": "₹7", "unit": "Kg" },
                    { "name": "Rough Paper", "price": "₹7", "unit": "Kg" },
                    { "name": "Copy", "price": "₹8", "unit": "Kg" }
                ]
            },
            {
                "category": "Metal",
                "image": Metal,
                "items": [
                    { "name": "Iron", "price": "₹25", "unit": "Kg" },
                    { "name": "Aluminum", "price": "₹80", "unit": "Kg" },
                    { "name": "Copper", "price": "₹450", "unit": "Kg" },
                    { "name": "Brass", "price": "₹250", "unit": "Kg" },
                    { "name": "Steel", "price": "₹30", "unit": "Kg" }
                ]
            },
            {
                "category": "Plastic",
                "image": Plastic,
                "items": [
                    { "name": "Soft Plastic", "price": "₹6", "unit": "Kg" },
                    { "name": "Hard Plastic", "price": "₹1", "unit": "Kg" },
                    { "name": "Milk Covers", "price": "₹2", "unit": "Kg" },
                    { "name": "Fibre", "price": "₹6", "unit": "Kg" },
                    { "name": "Polythene", "price": "₹15", "unit": "Kg" }
                ]
            },
            {
                "category": "E-Waste",
                "image": EWaste,
                "items": [
                    { "name": "E-waste", "price": "₹10", "unit": "Kg" },
                ]
            }
        ]
    };
    return (
        <div className='bg-olive p-5'>
            <div className="container">
                <Titles heading="Cash for Your Trash: See How Much You Can Earn!" textColor="text-white" />
                <div className="container">
                    {wasteData.wasteCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <img
                                        src={category.image}
                                        className="img-fluid mb-4"
                                        alt={category.category}
                                        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
                                    />
                                    <p className="text-center text-white fs-4 fw-semibold">{category.category}</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="col-md-3 col-sm-6 mb-3">
                                                <div className="card h-100 text-center text-olive" style={{background:"#b6c4b6"}}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <p className="card-text">{item.price} /{item.unit}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p className="mt-4 text-center" style={{color:"#b6c4b6"}}>
                        Note: For Bulk scrap (Commercial) prices may vary.{" "}
                        <Link to="/contact" className='text-white '>Contact us to know more</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}
