import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-silder';

const Home = () => {
  return (
    <Helmet title = 'Trang chủ'>
      {/* Hero SLider */}
      <HeroSlider 
                data = {heroSliderData} 
                control={true}
                auto={false}
                timeOut={5000}/>
      {/* End Hero Silder */}
    </Helmet>
  );
}

export default Home;
