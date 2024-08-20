import React from 'react';
import Navbar from './Navbar';
import MainSection from './Mainsection';
import CompanyLogos from './CompanyLogos';
import InfoSection from './InfoSection';
import CardSection from './CardSection';
import ImageTextSection from './ImageTextSection';
import ImageGallerySection from './ImageGallerySection';
import CustomCard from './CustomCard';
import FAQContactSection from './FAQContactSection';
import SocialLinksAndMenu from './SocialLinksAndMenu';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Navbar />
      <MainSection/>
      <CompanyLogos/>
      <InfoSection/>
      <CardSection/>
      <section id="How it works">
        <ImageTextSection />
      </section>
      <section id="Our work">
        <ImageGallerySection/>
      </section>
      <section id="pricing">
        <CustomCard/>
      </section>
      <section id="About us">
        <FAQContactSection/>
      </section>
      <SocialLinksAndMenu/>
      <Footer />
    </div>
  );
}

export default App;
