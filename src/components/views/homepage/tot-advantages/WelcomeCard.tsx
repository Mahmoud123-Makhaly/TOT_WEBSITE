import React from 'react';
import Image from 'next/image';

import services from '@assets/images/home-page/services.png';

const WelcomeCard = () => {
  return (
    <div className="rounded-4  mb-3 mb-lg-0 bg-light-purple p-42 welcome-card">
      <h2 className="text-primary font-24 font-weight-700 mb-4">Welcome to TOT, </h2>
      <p className="text-black font-16   pb-42 m-0">
        where we believe in empowering businesses in diverse sectors to thrive in the digital age.
      </p>
      <Image src={services} alt="services" className="w-100" />
    </div>
  );
};

export default WelcomeCard;
