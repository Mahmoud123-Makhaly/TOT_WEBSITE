import React from 'react';

import { MiniCard } from '@/components/common/mini-card';
import { servicesData } from '@/components';

const Services = () => {
  return (
    <React.Fragment>
      {servicesData.map((item, index) => (
        <MiniCard
          key={index}
          imgSrc={item.imgSrc}
          text={item.text}
          className={`${item.className} mb-38`}
          mobileBackground={item.mobileBackground}
          desktopBackground={item.desktopBackground}
        />
      ))}
    </React.Fragment>
  );
};

export default Services;
