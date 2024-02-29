import React from 'react';
import { DetailBox, VisualBlock } from '@/components';
import solutions from '@assets/images/fashion/solutions.png';

const ManagementSolutions = () => {
  return (
    <div>
      <VisualBlock
        backgroundColor="sky-blue"
        borderRaduis="23"
        reverse
        DetailsSpace="col-lg-7"
        imageSpace="col-lg-5"
        imgSrc={solutions}
        imgAlt="solutions"
        className="mt-42 fashion"
        CardInfo={
          <DetailBox
            title="With our cutting-edge apparel management solutions,"
            desc="you can stay ahead of the competition, deliver exceptional customer experiences, and drive success in the dynamic world of fashion retail."
          />
        }
      />
    </div>
  );
};

export default ManagementSolutions;
