import React from 'react';

import SupportCard from './SupportCard';
import SupportFigures from './SupportFigures';
import { Col, Row } from 'reactstrap';

const Support = () => {
  return (
    <div className="support py-42">
      <Row>
        <Col xl={6}>
          <SupportCard />
        </Col>
        <Col xl={6}>
          <SupportFigures />
        </Col>
      </Row>
    </div>
  );
};

export default Support;
