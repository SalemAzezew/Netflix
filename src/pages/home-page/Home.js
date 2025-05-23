import React from 'react'
import Header from './Headerrr/Header.js';
import Footer from './Footer/Footer.js';
import Banner from './Banner/Banner.js';
import RowList from './Rows/RowList/RowList.js';

function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <RowList />
        <Footer />
    </div>
  )
}

export default Home