import React from 'react';
import check from '@assets/images/markets/check.svg';
import Image from 'next/image';
const MessagesContent = () => {
  return (
    <div className="message-content">
      <h4 className="fw-bold text-primary font-24 m-0 pb-4">Marketing Messages:</h4>
      <ul className="list-unstyled">
        <li className="mb-40 ">
          <Image src={check} width={0} height={0} alt="check" />
          <span className="ms-3 text">A user-friendly interface that makes it easy for customers to shop</span>
        </li>
        <li className="mb-40 ">
          <Image src={check} width={0} height={0} alt="check" />
          <span className="ms-3 text">Powerful marketing tools to help you reach new customers</span>
        </li>
        <li className="mb-40 ">
          <Image src={check} width={0} height={0} alt="check" />
          <span className="ms-3 text">Secure payment processing to protect your customers data</span>
        </li>
        <li className="mb-40 ">
          <Image src={check} width={0} height={0} alt="check" />
          <span className="ms-3 text">24/7 customer support to help you with any problems</span>
        </li>
      </ul>
    </div>
  );
};

export default MessagesContent;
