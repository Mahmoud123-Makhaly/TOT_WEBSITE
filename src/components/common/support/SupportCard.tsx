import React from 'react';
import Image from 'next/image';

import support from '@assets/images/home-page/support.jpg';

const SupportCard = () => {
  return (
    <div className="support-card position-relative  ">
      <Image src={support} width={0} height={0} alt="support" />
      <div className="img-card-info position-absolute text-white">
        <p className="text font-32 m-0">Sectors </p>
        <h3 className="title font-40 fw-bold m-0">we support</h3>
      </div>
    </div>
  );
};

export default SupportCard;
