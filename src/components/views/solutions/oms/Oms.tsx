import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ContentBlock } from '@/components';
import oms from '@assets/images/solutions/oms.jpg';
import { omsInfo } from '@/components';

const Oms = () => {
  return (
    <div id="oms" className="oms">
      <Row className="align-items-center flex-column-reverse flex-xxl-row">
        <Col xxl={4}>
          <ContentBlock title={omsInfo.title} description={omsInfo.description} contentBackground="AntiqueWhite" />
        </Col>
        <Col xxl={8}>
          <Image src={oms} alt="oms" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
      </Row>
    </div>
  );
};

export default Oms;
