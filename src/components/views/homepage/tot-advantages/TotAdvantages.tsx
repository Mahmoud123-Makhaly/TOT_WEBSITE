import React from 'react';
import { Col, Row } from 'reactstrap';

import WelcomeCard from './WelcomeCard';
import Services from './Services';

const TotAdvantages = () => {
  return (
    <div className="tot-advantage">
      <Row>
        <Col lg={6}>
          <WelcomeCard />
        </Col>
        <Col lg={6}>
          <Services />
        </Col>
      </Row>
    </div>
  );
};

export default TotAdvantages;
