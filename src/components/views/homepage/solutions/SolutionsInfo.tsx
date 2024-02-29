import React from 'react';
import { useRouter } from 'next/navigation';
import { ButtonMaker } from '@components';

const SolutionsInfo = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <h3 className="title font-24 line-height-36 font-weight-700 m-0 text-primary">
        TOTs Integrated Digital Business Solutions: Elevate Your Customer Experience and Boost Your Business
      </h3>
      <p className="text text-dark-gray line-height-24 my-4">
        Experience the power of TOT’s comprehensive digital business solutions, engineered to provide a seamless
        customer experience across all platforms. Our solutions are designed to personalize your customer journey,
        optimize your marketing campaigns, and elevate your customer service to new heights
      </p>
      <ButtonMaker btnText="Read more" onClick={() => router.push('/solutions')} />
    </React.Fragment>
  );
};

export default SolutionsInfo;
