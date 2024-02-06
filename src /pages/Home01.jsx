import React from "react";
import Header from "../components/header/Header";
import Slider01 from "../components/slider/Slider01";
import dataSlider from "../assets/fake-data/dataSlider";
import LiveAution from "../components/layouts/home/LiveAution";
import dataLiveAution from "../assets/fake-data/dataLiveAution";
import LatestCollections from "../components/layouts/home/LatestCollections";
import dataCollections from "../assets/fake-data/dataCollections";
import Footer from "../components/footer/Footer";
import BackgoundVideoSec from "../components/videosec/BackgoundVideoSec";
import ArtSection from "../components/ArtSec/ArtSection";


import NameSec from "../components/NameSec/NameSec";
import AmbassadorSection from "../components/AmbassadorSec/AmbassadorSec";

import ArtSectionsecond from "../components/ArtSec2/ArtSectionsecond";
import LogoSliderSec from "../components/logoSliderSec/LogoSliderSec";

import SocialSection from "../components/SocialSec/SocialSec";
import SubscriptionSection from "../components/WhitelistSecNft/WhitelistSecNft";
import FaqSection from "../components/FAQS/FaqSection";
import Roadmap from "../components/Roadmap/Roadmap";

const Home01 = () => {
  return (
    <div className="home-1">
      <Header />
      <Slider01 data={dataSlider} />
      <LogoSliderSec />

      <ArtSection />
      <BackgoundVideoSec />
      {/* <Roadmap/> */}
      <ArtSectionsecond />
      <NameSec />
      <SubscriptionSection />
      <AmbassadorSection />
      <LatestCollections data={dataCollections} />
      <SocialSection />
      <FaqSection/>
      <Footer />
    </div>
  );
};

export default Home01;
