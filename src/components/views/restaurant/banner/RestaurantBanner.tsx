'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Banner } from '@/components';
import banner from '@assets/images/restaurant/banner.png';
import background from '@assets/images/home-page/background.jpg';
const RestaurantBanner = () => {
  const router = useRouter();
  const bannerInfo = {
    tilte: ['Supercharge your restaurant or food service business with one-stop solutions.'],
    description: [
      'Experience the ultimate restaurant software solution of TOT, that handles every aspect of your  food service operations   , from seamless tableside ordering to efficient inventory management and streamlined kitchen operations.',
    ],
    btnText: 'Start your Trial',
  };

  return (
    <Banner
      className="restaurant-banner"
      contentSpace="col-lg-7"
      imageSpace="col-lg-5"
      buttonText={bannerInfo.btnText}
      title={bannerInfo.tilte}
      description={bannerInfo.description}
      imgAlt="banner"
      imgSrc={banner}
      backgroundImg={background.src}
      buttonOnClick={() => router.push('/contact-us')}
    />
  );
};

export default RestaurantBanner;
