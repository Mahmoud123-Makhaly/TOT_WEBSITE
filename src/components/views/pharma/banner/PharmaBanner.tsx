'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Banner } from '@/components';
import banner from '@assets/images/pharma/banner.png';
import background from '@assets/images/pharma/background.jpg';

const PharmaBanner = () => {
  const router = useRouter();
  const pharmaBannerInfo = {
    tilte: ['Unleash the full', ' potential of your ', 'pharmacy '],
    description: [
      'with our comprehensive software solution that brings together prescriptions, drugs, and health & beauty products under one unified platform. Elevate your efficiency, accuracy, and profitability to new heights with TOTs cutting-edge solution tailored for the success of modern pharmacies.',
    ],
    btnText: 'Start your Trial',
  };

  return (
    <Banner
      className="pharma-banner"
      contentSpace="col-lg-7"
      imageSpace="col-lg-5"
      buttonText={pharmaBannerInfo.btnText}
      title={pharmaBannerInfo.tilte}
      description={pharmaBannerInfo.description}
      imgAlt="banner"
      imgSrc={banner}
      backgroundImg={background.src}
      buttonOnClick={() => router.push('/contact-us')}
    />
  );
};

export default PharmaBanner;
