import React from 'react';
import { Col, Row } from 'reactstrap';

import { MediaOverlayCard } from '@/components';
import touchPoints from '@assets/images/about/touchPoints.jpg';

import TouchPointContent from './TouchPointContent';

const TouchPoints = () => {
  return (
    <div className="my-42">
      <Row>
        <Col lg={5}>
          <MediaOverlayCard
            imgSrc={touchPoints}
            textCenter
            text="By seamlessly connecting various channels and touchpoints,"
            textColor="white"
            className="text-center mb-3 mb-lg-0"
            textize="24"
          />
        </Col>
        <Col lg={7}>
          <TouchPointContent />
        </Col>
      </Row>
    </div>
  );
};

export default TouchPoints;
