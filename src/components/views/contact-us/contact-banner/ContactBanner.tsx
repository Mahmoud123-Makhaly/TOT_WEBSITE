import React from 'react';
import { Banner } from '@/components';
import banner from '@assets/images/contact-us/banner.png';
import background from '@assets/images/home-page/background.jpg';
const ContactBanner = () => {
  const marketsBannerInfo = {
    tilte: ['Contact us '],
    description: [
      'TOT is a leading provider of integrated digital business solutions, committed to being your dedicated partner in the realm of digital transformation. Our primary goal is to deliver exceptional value to clients worldwide by offering cost-effective solutions that are seamlessly integrated, responsive, and trustworthy. With a comprehensive service portfolio spanning operations, consulting, digital innovations, and technology solutions, we empower enterprises to effectively overcome complex business challenges. Our expertise and dedication ensure that we equip businesses with the tools they need to thrive in the digital age.',
    ],
  };

  return (
    <Banner
      className="contact-banner"
      contentSpace="col-lg-7"
      imageSpace="col-lg-5"
      title={marketsBannerInfo.tilte}
      description={marketsBannerInfo.description}
      imgAlt="banner"
      imgSrc={banner}
      backgroundImg={background.src}
    />
  );
};

export default ContactBanner;
