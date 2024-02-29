'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { DetailBox, VisualBlock } from '@/components';
import transformation from '@assets/images/about/transformation.png';

const TransFormation = () => {
  const router = useRouter();
  return (
    <VisualBlock
      backgroundColor="light-purple"
      borderRaduis="4"
      imgSrc={transformation}
      imgAlt="transformation"
      className="transformation mb-42"
      DetailsSpace="col-xl-7"
      imageSpace="col-xl-5"
      CardInfo={
        <DetailBox
          title="Are you ready to embrace the future?"
          desc="Join us on the digital transformation journey. "
          btnText="Contact us"
          boldDesc="today to unlock the true potential of your business."
          className="transformation-card p-0 p-lg-5"
          onClick={() => router && router.push('contact-us')}
        />
      }
    />
  );
};

export default TransFormation;
