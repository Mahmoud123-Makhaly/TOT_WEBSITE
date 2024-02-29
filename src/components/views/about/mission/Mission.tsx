import React from 'react';

import { CompanyObjective } from '@/components';
import mission from '@assets/images/about/mission.jpg';

const Mission = () => {
  const missionData = {
    title: 'Mission',
    boldDesc: "We see a future where technology isn't just an add-on, but an integrated part of business strategy.",

    desc: `  Our mission at TOT   is to pioneer digital transformations that empower businesses across sectors. We are dedicated to delivering comprehensive and customized digital solutions designed to elevate customer experiences, optimize operational efficiency, and unify branding across platforms. Our commitment is to lead businesses beyond the conventional and into the future of a digitally integrated world.`,
  };
  return (
    <CompanyObjective
      id="mission"
      backgroundImg={mission.src}
      title={missionData.title}
      boldDescription={missionData.boldDesc}
      description={missionData.desc}
      className="mission"
    />
  );
};

export default Mission;
