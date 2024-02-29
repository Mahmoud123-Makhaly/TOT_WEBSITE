import React from 'react';

import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import join from '@assets/images/home-page/join.jpg';

import InvitationMessage from './InvitationMessage';

const Invitaion = () => {
  return (
    <div className="invitation">
      <div className="invitaion-card bg-white border-raduis-23 ">
        <Row className="flex-column-reverse flex-md-row align-items-center">
          <Col md={6} lg={7}>
            <InvitationMessage />
          </Col>
          <Col md={6} lg={5} className="text-center text-md-end">
            <Image src={join} alt="invitaion" width={0} height={0} className="w-100 text-center" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Invitaion;
