'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Banner } from '@/components';
import banner from '@assets/images/fashion/banner.png';
import background from '@assets/images/fashion/background.jpg';

const FashionBanner = () => {
  const router = useRouter();
  const FashionBannerInfo = {
    tilte: ['Stay competitive,  ', 'stay stylish,'],
    description: [
      'and unlock your true fashion potential with TOTs game-changing solution.',
      'Elevate your fashion retail game with our cutting-edge apparel management solutions, designed to empower fashion retailers and keep them ahead of the style curve.',
    ],
    btnText: 'Start your Trial',
  };

  return (
    <Banner
      className="fashion-banner"
      contentSpace="col-lg-6"
      imageSpace="col-lg-6"
      buttonText={FashionBannerInfo.btnText}
      title={FashionBannerInfo.tilte}
      description={FashionBannerInfo.description}
      imgAlt="banner"
      imgSrc={banner}
      backgroundImg={background.src}
      buttonOnClick={() => router.push('/contact-us')}
    />
  );
};

export default FashionBanner;
