import React from 'react';
import { Col, Row } from 'reactstrap';

import location from '@assets/images/contact-us/location.svg';
import email from '@assets/images/contact-us/mail.svg';
import phone from '@assets/images/contact-us/phone.svg';
import { ListModule } from '@/components';
import Link from 'next/link';
const Location = () => {
  const dubaiLocation = [
    {
      imgSrc: location,
      imgAlt: 'location',
      text: (
        <Link href="" className="text-decoration-none text-black" target="_blank">
          area business buy bldg B2B Tower Appt 1213
        </Link>
      ),
    },
    {
      imgSrc: email,
      imgAlt: 'email',
      text: (
        <Link href="mailto:info@totplatform.com" target="_blank" className="text-decoration-none text-black">
          info@totplatform.com
        </Link>
      ),
    },
    {
      imgSrc: phone,
      imgAlt: 'check',
      text: (
        <Link href="tel:+971 55 255 7519" target="_blank" className="text-decoration-none text-black">
          +971 55 255 7519
        </Link>
      ),
    },
  ];
  const egyptLocation = [
    {
      imgSrc: location,
      imgAlt: 'location',
      text: (
        <Link
          href="https://www.google.com/maps/place/30%C2%B003'13.7%22N+31%C2%B012'31.4%22E/@30.0538065,31.2061386,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0538065!4d31.2087135?hl=en&entry=ttu"
          className="text-decoration-none text-black"
          target="_blank"
        >
          48 El-Farik Abd El-Moneim Riad, Agouza, Giza
        </Link>
      ),
    },
    {
      imgSrc: email,
      imgAlt: 'email',
      text: (
        <Link href="mailto:info@totplatform.com" target="_blank" className="text-decoration-none text-black">
          info@totplatform.com
        </Link>
      ),
    },
    {
      imgSrc: phone,
      imgAlt: 'check',
      text: (
        <Link
          href="tel:+201000651136"
          target="_blank "
          className="text-black text-decoration-none  d-flex align-items-center"
        >
          (+02)01000651136
        </Link>
      ),
    },
  ];
  return (
    <div className="location">
      <Row>
        <Col xl={6}>
          <div className="location-content bg-white">
            <ListModule title="Our location in Dubai" listItems={dubaiLocation} />
          </div>
        </Col>
        <Col xl={6}>
          <div className="location-content bg-white mb-0">
            <ListModule title="Our location in Egypt" listItems={egyptLocation} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
