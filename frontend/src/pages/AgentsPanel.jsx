import React, { useState } from 'react'
import { Titles } from '../components/Titles';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const AgentsPanel = () => {
    const [selectedPincode, setSelectedPincode] = useState('');

            const handlePincodeChange = (e) => {
                setSelectedPincode(e.target.value);
            };

            const cardsData = [

                { pincode: '110001', title: 'Delhi', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet impedit odit fuga numquam minus a beatae adipisci corrupti tempora quis unde optio natus libero earum, repellat dolores cupiditate nesciunt.' },
                { pincode: '400001', title: 'Mumbai', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet impedit odit fuga numquam minus a beatae adipisci corrupti tempora quis unde optio natus libero earum, repellat dolores cupiditate nesciunt.' },
                { pincode: '560001', title: 'Bangalore', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet impedit odit fuga numquam minus a beatae adipisci corrupti tempora quis unde optio natus libero earum, repellat dolores cupiditate nesciunt.' },
            ];

            return (
                <div className="container">
                    <Titles heading="Select Pincode to Display Cards" textColor="text-olive"/>
                    <select className="form-control bg-olive pincode-dropdwown p-3 fw-semibold" onChange={handlePincodeChange}>
                        <option value="">Select Pincode</option>
                        <option value="110001">110001</option>
                        <option value="400001">400001</option>
                        <option value="560001">560001</option>
                    </select>
                    <div className="row mt-3">
                        {cardsData.map((card) => (
                            (card.pincode === selectedPincode || selectedPincode === "") && (
                                <div className="col-md-4" key={card.pincode}>
                                    <div className="card mb-3 border-0 rounded-5">
                                        <div className="card-body bg-grey rounded-5 p-4">
                                            <h5 className="card-title fw-bold py-3">{card.title}</h5>
                                            <p className="card-text">{card.description}</p>
                                            <Link><Button btnText="Confirm Pickup" bgColor="btn-success"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            );
        };