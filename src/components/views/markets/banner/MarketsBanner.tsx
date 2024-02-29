'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Banner } from '@/components';
import banner from '@assets/images/markets/banner.png';
import background from '@assets/images/markets/background.jpg';
const MarketsBanner = () => {
  const router = useRouter();
  const marketsBannerInfo = {
    tilte: ['Take your', 'supermarkets and', 'hypermarkets online '],
    description: [
      'with TOTs e-commerce solutions. Reach more customers, increase sales, and improve efficiency with a custom-tailored solution that meets your specific needs.',
    ],
    btnText: 'Start your Trial',
  };

  return (
    <Banner
      className="markets-banner"
      contentSpace="col-lg-6"
      imageSpace="col-lg-6"
      buttonText={marketsBannerInfo.btnText}
      title={marketsBannerInfo.tilte}
      description={marketsBannerInfo.description}
      imgAlt="banner"
      imgSrc={banner}
      reverse
      backgroundImg={background.src}
      buttonOnClick={() => router.push('/contact-us')}
    />
  );
};

export default MarketsBanner;
