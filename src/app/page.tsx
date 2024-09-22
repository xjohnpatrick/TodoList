import React from 'react';
import Body from '../components/Body.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const Home = () => {
  
  return (
    <div className={`${poppins.variable}`}>
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

export default Home;
