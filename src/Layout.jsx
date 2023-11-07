import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

function Layout({ children }) {
  return (
    <>
    <div className='flex flex-col justify-between h-full'>
    <Header />
    <div className="">
      
      {children}
      
    </div>
    <Footer />
    </div>
    </>
    
  );
}

export default Layout;
