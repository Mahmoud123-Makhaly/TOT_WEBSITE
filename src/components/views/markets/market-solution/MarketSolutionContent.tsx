import { DetailBox } from '@/components';
import React from 'react';

const MarketSolutionContent = () => {
  const businessInfo = {
    title: 'With our Supermarket Solution of TOT,',
    desc: ' you can optimize your supermarket operations, enhance the customer experience, and drive business growth in the dynamic and ever-evolving retail industry.',
  };
  return <DetailBox title={businessInfo.title} desc={businessInfo.desc} className="pharma-content" />;
};

export default MarketSolutionContent;
