import React from 'react';

import { Banner } from '@/components';
import banner from '@assets/images/about/banner.jpg';
import background from '@assets/images/home-page/background.jpg';

const AboutBanner = () => {
  const aboutBanner = {
    description: [
      'TOT is a leading provider of integrated digital business solutions, committed to being your dedicated partner in the realm of digital transformation. Our primary goal is to deliver exceptional value to clients worldwide by offering cost-effective solutions that are seamlessly integrated, responsive, and trustworthy. With a comprehensive service portfolio spanning operations, consulting, digital innovations, and technology solutions, we empower enterprises to effectively overcome complex business challenges. Our expertise and dedication ensure that we equip businesses with the tools they need to thrive in the digital age.',
    ],
    title: ['Empowering Businesses', 'through Digital', 'Transformation'],
  };
  return (
    <Banner
      imgSrc={banner}
      imgAlt="about-banner"
      className="about-banner"
      title={aboutBanner.title}
      contentSpace="col-xl-7"
      imageSpace="col-xl-5"
      description={aboutBanner.description}
      backgroundImg={background.src}
      reverse
    />
  );
};

export default AboutBanner;
