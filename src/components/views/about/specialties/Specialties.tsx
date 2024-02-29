import React from 'react';
import { Col, Row } from 'reactstrap';

import management from '@assets/images/about/management.jpg';
import { MediaOverlayCard } from '@/components';

import SpecialtiesFields from './SpecialtiesFields';

const Specialties = () => {
  return (
    <div className="specialties">
      <Row>
        <Col xl={4}>
          <MediaOverlayCard
            imgAlt="management"
            imgSrc={management}
            text="Our solutions are comprehensive and diverse, including"
            textize="24"
            textColor="primary"
            textPosition={{ left: '2rem', bottom: '2rem' }}
            className="p-0 border-raduis-4  mb-3 mb-xl-0"
          />
        </Col>
        <Col xl={8}>
          <SpecialtiesFields />
        </Col>
      </Row>
    </div>
  );
};

export default Specialties;
