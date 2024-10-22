import React, { useState } from 'react';
import { Titles } from '../components/Titles';
import hero  from '../assets/buyHero.png';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import CategorySlider from '../components/Slider';
import Plastic from '../assets/plastic.png';
import Paper from '../assets/paper.png';
import Metal from '../assets/e-waste.png';
import Clothes from '../assets/clothes.png';

export const Buywaste = () => {
  const [selectedItem, setSelectedItem] = useState(null);  // Track the selected item for purchase
  const [showForm, setShowForm] = useState(false);  // Control modal visibility

  const dummyData = [
    {
      id: 1,
      img: Plastic,
      name: "Recycled Plastic Bottles",
      price: 0.50,
      unit: "kg",
      available: 500,
      seller: "EcoTrade",
    },
    {
      id: 2,
      img: Paper,
      name: "Recycled Paper",
      price: 0.30,
      unit: "kg",
      available: 300,
      seller: "GreenWorld",
    },
    {
      id: 3,
      img: Metal,
      name: "Recycled Metal Cans",
      price: 1.00,
      unit: "kg",
      available: 150,
      seller: "RecycleIt",
    },
    {
      id: 4,
      img: Clothes,
      name: "Recycled Textiles",
      price: 1.00,
      unit: "kg",
      available: 150,
      seller: "RecycleIt",
    },
  ];

  // Open form modal with selected item
  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  return (
    <>  
      <div className='container'>
        <Titles heading="Find Recyclable Waste for Your Business" textColor="text-olive"/>
        <img src={hero} alt="" className='rounded-5 img-fluid w-100' />
        <div className="d-flex py-5">
          <div className="m-auto">
            <Link to="/contact"> <Button btnText="Contact for Bulk Orders" bgColor="btn-success"/></Link>
          </div>
        </div>
        <div className='py-5'>
          <Titles heading="Categories of Waste Available" textColor="text-olive"/>
          <CategorySlider/>
        </div>
        <Titles heading="Popular Recyclable Listings" textColor="text-olive"/>
        <div className="container">
          <div className="row">
            {dummyData.map((item, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card h-100 rounded-5 ">
                  <div className="bg-olive p-3 rounded-top-5 "> 
                    <img src={item.img} alt={item.name} className="rounded-4 img-fluid"/>
                  </div>
                  <div className="card-body p-4 bg-olive text-white">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text mb-0 pb-1">Price: {item.price}</p>
                    <p className="card-text mb-0 pb-1">Available: {item.available}</p>
                    <p className="card-text mb-0 pb-1">Seller: {item.seller}</p>
                  </div>
                  <div className='p-3 bg-olive rounded-bottom-5'>
                    <button 
                      className="btn btn-light my-2 py-2 w-100 rounded-pill"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-5"></div>
        {/* Form Modal */}
        {showForm && (
          <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Buy {selectedItem.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowForm(false)}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group py-2">
                      <label className='mb-2'>Quantity (in {selectedItem.unit})</label>
                      <input type="number" className="form-control" placeholder="Enter quantity" required/>
                    </div>
                    <div className="form-group py-2">
                      <label className='mb-2'>Type of Waste</label>
                      <input type="text" className="form-control" value={selectedItem.name} readOnly/>
                    </div>
                    <div className="form-group py-2">
                      <label className='mb-2'>Address</label>
                      <input type="text" className="form-control" placeholder="Enter delivery address" required/>
                    </div>
                    <div className="form-group py-2">
                      <label className='mb-2'>Contact Number</label>
                      <input type="tel" className="form-control" placeholder="Enter contact number" required/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Close</button>
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
