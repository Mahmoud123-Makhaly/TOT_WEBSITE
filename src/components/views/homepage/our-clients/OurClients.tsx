import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';

import bioderma from '@assets/images/home-page/bioderma.svg';
import naos from '@assets/images/home-page/naos.svg';
import freshly from '@assets/images/home-page/freshly.svg';
import alkayan from '@assets/images/home-page/alkyan.svg';
import sap from '@assets/images/home-page/sap.svg';
import alkhbaz from '@assets/images/home-page/alkhbaz.svg';
import amts from '@assets/images/home-page/amts.svg';
const OurClients = () => {
  const imgs = [
    {
      imgSrc: bioderma,
      className: 'mb-4',
    },
    {
      imgSrc: naos,
      className: 'mb-4',
    },
    {
      imgSrc: alkayan,
      className: 'mb-4',
    },
    {
      imgSrc: sap,
      className: 'mb-4',
    },
    {
      imgSrc: alkhbaz,
      className: 'mb-4 mb-lg-0',
    },
    {
      imgSrc: amts,
      className: 'mb-4  mb-lg-0',
    },
    {
      imgSrc: freshly,
      className: 'mb-0',
    },
  ];
  return (
    <div className="ourClients py-42">
      <h4 className="title text-primary font-weight-600 font-20 mb-3">Our clients </h4>
      <Row className="justify-content-center">
        {imgs.map((item, index) => {
          return (
            <Col className="col-lg-3 col-md-4   col-6" key={index}>
              <div className={`${item.className} client-img bg-azure-mist border-raduis-4`}>
                <Image src={item.imgSrc} alt="client-img" width={0} height={0} className="w-100" />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default OurClients;
