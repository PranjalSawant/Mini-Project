import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-olive text-white py-5">
      <div className="container">
        <div className="row pt-5">
          <div className='col-md-3'>
            <Link className="text-white dancing-script-brand fs-2 text-decoration-none" to="/">
                 Trash to Cash
            </Link>
          <p className='py-3'>Join the Trash to Cash community and start recycling today!</p>

          </div>
          <div className="col-md-3 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/how-it-works" className="text-white text-decoration-none">How It Works</a></li>
              <li><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/sell-waste" className="text-white text-decoration-none">Sell Waste</a></li>
              <li><a href="/partners" className="text-white text-decoration-none">Partner with Us</a></li>
              <li><a href="/pricing" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="/faqs" className="text-white text-decoration-none">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p className='mb-0'>Email: <a href="mailto:info@trashtocash.com" className="text-white text-decoration-none">info@trashtocash.com</a></p>
            <p className='mb-0'>Phone: <a href="tel:+18001234567" className="text-white text-decoration-none">+1 800 123 4567</a></p>
            <p className='mb-0'>Address: 123 Green Street, Eco City, Earth</p>
          </div>
        </div>

        <div className="text-center py-4">
        </div>

        <div className="text-center pt-3 border-top border-light">
          <p className="mb-0">&copy; 2024 Trash to Cash. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
