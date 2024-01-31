import React from 'react';
import Header from '../components/header/Header';
import Slider01 from '../components/slider/Slider01';
import dataSlider from '../assets/fake-data/dataSlider';
import LiveAution from '../components/layouts/home/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import LatestCollections from '../components/layouts/home/LatestCollections';
import dataCollections from '../assets/fake-data/dataCollections'
// import BestSeller from '../components/layouts/home/BestSeller';
// import dataBestSeller from '../assets/fake-data/dataBestSeller'
// import TrendingCollections from '../components/layouts/home/TrendingCollections';
// import dataTrendingCollections from '../assets/fake-data/dataTrendingCollections'
// import Category from '../components/layouts/home/Category';
// import dataCategory from '../assets/fake-data/dataCategory'
import Footer from '../components/footer/Footer';

// import { dataLinks } from '../assets/fake-data/dataLinks';
import BackgoundVideoSec from '../components/videosec/BackgoundVideoSec';

import ArtSection from '../components/ArtSec/ArtSection';
import MassiveArtMarketSection from '../components/MassiveSec/MassiveArtMarketSection';
import StatisticsSection from '../components/StatisticsSec/StatisticsSection';

import NameSec from '../components/NameSec/NameSec';
import AmbassadorSection from '../components/AmbassadorSec/AmbassadorSec';

import FeaturedSection from '../components/FeatureSec/FeatureSection';
import TypeSec from '../components/TypeSec/TypeSec';
import ContactSection from '../components/ContactSec/ContactSection';
import ArtSectionsecond from '../components/ArtSec2/ArtSectionsecond';
import LogoSliderSec from '../components/logoSliderSec/LogoSliderSec';

import TimelineCarousel from '../components/TimelineSec/TimelineSec';
import WhitelistSection from '../components/WhiteListSec/WhitelistSec';
import SocialSection from '../components/SocialSec/SocialSec';
import SubscriptionSection from '../components/WhitelistSecNft/WhitelistSecNft';
import FaqSection from '../components/FAQS/FaqSection';
import Roadmap from '../components/TimelineSec/TimelineSec';
// import { Newsletters } from '../components/layouts/home/Newsletters';

const Home01 = () => {
  return <div className='home-1'>
      <Header />
      <Slider01 data={dataSlider} />
      <LogoSliderSec/>    
      <hr/>
      <ArtSection/>
      <BackgoundVideoSec/>
      {/* <Roadmap/> */}

      {/* <TypeSec/> */}
      {/* <MassiveArtMarketSection/> */}
      {/* <ArtMarketChart/> */}
      {/* <StatisticsSection/> */}
      <ArtSectionsecond/>
      <NameSec/>
      {/* <WhitelistSection/> */}
      <SubscriptionSection/>
      <AmbassadorSection/>
      {/* <FeaturedSection/> */}
      {/* <LiveAution data={dataLiveAution} shown={"nullfalse"}/>  */}
           {/* <ContactSection/>
            */}
            <LatestCollections data={dataCollections} />
            <SocialSection/>
      {/* <LiveAution data={dataLiveAution} shown={"nullfalse"}/>
      <BestSeller data={dataBestSeller} />
      <TrendingCollections data={dataTrendingCollections} />
      <Category data={dataCategory} /> */}
      {/* <Newsletters /> */}
      {/* <FaqSection/> */}
      <Footer />
  </div>;
};

export default Home01;
