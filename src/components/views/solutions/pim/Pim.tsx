import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ContentBlock, pimInfo } from '@/components';
import pim from '@assets/images/solutions/pim.jpg';

const Pim = () => {
  return (
    <div id="pim" className="pim pt-42">
      <Row className="flex-xxl-row">
        <Col xxl={7}>
          <Image src={pim} alt="pim" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
        <Col xxl={5}>
          <ContentBlock
            title={pimInfo.title}
            description={pimInfo.description}
            contentBackground="light-green"
            endOverLayed
          />
        </Col>
      </Row>
    </div>
  );
};

export default Pim;
