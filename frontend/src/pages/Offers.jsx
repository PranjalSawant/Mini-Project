import React from 'react'
import { Titles } from '../components/Titles'

export const Offers = () => {
    const offers = [
        {
          offerName: 'Paper Recycling Bonanza',
          discount: '20% Extra Cash',
          time: 'Valid until 2024-11-30',
          description: 'Recycle paper and get 20% more on your total payout!',
        },
        {
          offerName: 'Plastic Turnaround',
          discount: '15% Bonus',
          time: 'Limited time offer',
          description: 'Earn an additional 15% on plastic recycling this month only.',
        },
        {
          offerName: 'Metal Mania',
          discount: '30% Off on Recycling Fee',
          time: 'Ends in 3 days',
          description: 'Recycle scrap metal with 30% off on our standard recycling fee.',
        },
        {
          offerName: 'E-Waste Eco Deal',
          discount: '50% More Cash',
          time: 'Offer valid through 2024-12-31',
          description: 'Dispose of e-waste responsibly and get 50% more cash on selected items.',
        },
      ];
  return (
    <div className='container'>
        <Titles heading="Turn Your Trash into Treasure – Exclusive Recycling Offers!" textColor="text-olive"/>
        <div className="row">
        {offers.map((offer, index) => (
          <div className="col-md-12 mb-4" key={index}>
            <div className="card h-100 mb-3 border-0 rounded-5">
            <div className="card-body bg-grey rounded-5 p-4">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{offer.offerName}</h5>
                  <p className="text-olive  fw-semibold ">⏰ {offer.time}</p>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Bonus: {offer.discount}</h6>
                <p className="card-text ">{offer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-5"></div>
    </div>
  )
}
