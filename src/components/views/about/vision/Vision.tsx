import React from 'react';

import {   CompanyObjective } from '@/components';
import vission from '@assets/images/about/vision.jpg';

const Vision = () => {
  const visionData = {
    title: 'Vision',
    boldDesc: "We are unwaveringly committed to transforming our clients' visions into reality.",
    desc: 'Our vision is rooted in a deep understanding of how artificial intelligence (AI) and other emerging technologies can be harnessed to drive efficiency, profitability, and sustainability for businesses across various sectors.',
  };
  return (
    <div id="vission">
      <CompanyObjective
        id="vission"
        backgroundImg={vission.src}
        title={visionData.title}
        boldDescription={visionData.boldDesc}
        description={visionData.desc}
        className="vission"
        reverse
      />
    </div>
  );
};

export default Vision;
