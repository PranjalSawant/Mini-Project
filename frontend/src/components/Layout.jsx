// components/Layout.js
import React from 'react';
import { Header } from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <main >{children}</main>
      <Footer/>
    </div>
  );
};
