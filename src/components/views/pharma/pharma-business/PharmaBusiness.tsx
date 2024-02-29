import React from 'react';
import { DetailBox, VisualBlock } from '@/components';
import business from '@assets/images/pharma/business.png';
const PharmaBusiness = () => {
  return (
    <VisualBlock
      backgroundColor="light-green"
      borderRaduis="23"
      DetailsSpace="col-lg-8"
      imageSpace="col-lg-4"
      imgSrc={business}
      imgAlt="business"
      className="mt-42 pharma_business"
      CardInfo={
        <DetailBox
          title="With our Pharma Solution,"
          desc="you can optimize your pharmacy operations, enhance patient care, and drive business growth in the dynamic and ever-evolving pharmaceutical industry."
          className="detail_box"
        />
      }
    />
  );
};

export default PharmaBusiness;
