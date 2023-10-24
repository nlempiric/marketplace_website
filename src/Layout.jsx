import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

function Layout({ children }) {
  return (
    <>
    <Header />
    <div className="">
      
      {children}
      <Footer />
    </div>
    </>
    
  );
}

export default Layout;
