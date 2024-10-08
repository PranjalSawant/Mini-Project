import React, { useState } from 'react'

export const AgentsPanel = () => {
    const [selectedPincode, setSelectedPincode] = useState('');

            const handlePincodeChange = (e) => {
                setSelectedPincode(e.target.value);
            };

            const cardsData = [
                { pincode: '110001', title: 'Card 1 - Delhi', description: 'Description for Delhi location.' },
                { pincode: '400001', title: 'Card 2 - Mumbai', description: 'Description for Mumbai location.' },
                { pincode: '560001', title: 'Card 3 - Bangalore', description: 'Description for Bangalore location.' },
            ];

            return (
                <div className="container">
                    <h2>Select Pincode to Display Cards</h2>
                    <select className="form-control" onChange={handlePincodeChange}>
                        <option value="">Select Pincode</option>
                        <option value="110001">110001</option>
                        <option value="400001">400001</option>
                        <option value="560001">560001</option>
                    </select>

                    <div className="row mt-3">
                        {cardsData.map((card) => (
                            (card.pincode === selectedPincode || selectedPincode === "") && (
                                <div className="col-md-4" key={card.pincode}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{card.title}</h5>
                                            <p className="card-text">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            );
        };