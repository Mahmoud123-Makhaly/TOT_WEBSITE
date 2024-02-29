import React from 'react';
import { DetailBox, VisualBlock } from '@/components';
import software from '@assets/images/restaurant/software.png';
const RestaurantSoftware = () => {
  return (
    <VisualBlock
      backgroundColor="AntiqueWhite"
      borderRaduis="23"
      DetailsSpace="col-lg-7"
      imageSpace="col-lg-5"
      imgSrc={software}
      imgAlt="software"
      className="mt-42 restaurant-software"
      CardInfo={
        <DetailBox
          title="If you are looking for a restaurant software solution"
          desc="that can help you take your business to the next level,"
          boldDesc="Then TOT is the perfect choice for you."
        />
      }
    />
  );
};

export default RestaurantSoftware;
