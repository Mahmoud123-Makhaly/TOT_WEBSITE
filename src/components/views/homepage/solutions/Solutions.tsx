import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import solution from '@assets/images/home-page/solution.png';

import SolutionsInfo from './SolutionsInfo';

const Solutions = () => {
  return (
    <div className="solutions  py-42">
      <Row className="align-items-center flex-column-reverse flex-lg-row">
        <Col xl={8} lg={7}>
          <SolutionsInfo />
        </Col>
        <Col xl={4} lg={5}>
          <div className="solution-card bg-light-green border-raduis-23 mb-3 mb-lg-0">
            <Image src={solution} alt="solution" width={0} height={0} className="w-100" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Solutions;
