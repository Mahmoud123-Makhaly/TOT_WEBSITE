'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import iPad from '@assets/images/home-page/iPad.png';
import background from '@assets/images/home-page/background.jpg';
import { Banner } from '@/components';

const HomeBanner = () => {
  const router = useRouter();
  return (
    <Banner
      imgSrc={iPad}
      imgAlt="ipad"
      title={['Mastering', 'the Digital Era']}
      description={[
        'Comprehensive Business Solutions for Diverse Sectors,',
        'Empowering Businesses through Digital Transformation      ',
      ]}
      buttonText={'Start your trial'}
      backgroundImg={background.src}
      buttonOnClick={() => router.push('/contact-us')}
      className="home-banner"
    />
  );
};

export default HomeBanner;
