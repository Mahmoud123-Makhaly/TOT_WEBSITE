import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ContentBlock, posInfo } from '@/components';
import pos from '@assets/images/solutions/pos.jpg';

const Pos = () => {
  return (
    <div id="pos" className="pos pt-42">
      <Row className="flex-xxl-row">
        <Col xxl={7}>
          <Image src={pos} alt="pim" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
        <Col xxl={5}>
          <ContentBlock
            title={posInfo.title}
            description={posInfo.description}
            contentBackground="light-green"
            endOverLayed
          />
        </Col>
      </Row>
    </div>
  );
};

export default Pos;
