import React from 'react';
import { DetailBox, VisualBlock } from '@/components';
import business from '@assets/images/markets/solutions.png';

const MarketSolution = () => {
  return (
    <div>
      <VisualBlock
        backgroundColor="AntiqueWhite"
        borderRaduis="23"
        DetailsSpace="col-lg-8"
        imageSpace="col-lg-4"
        imgSrc={business}
        imgAlt="business"
        className="my-42  market_solutions"
        CardInfo={
          <DetailBox
            title="With our Supermarket  Solution of TOT,"
            desc="you can optimize your supermarket operations, enhance the customer experience, and drive business growth in the dynamic and ever-evolving retail industry."
          />
        }
      />
    </div>
  );
};

export default MarketSolution;
