
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../app/globals.css'
const Layout = ({ children } : Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
