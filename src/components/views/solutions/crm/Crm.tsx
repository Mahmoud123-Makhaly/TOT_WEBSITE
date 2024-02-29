import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import crm from '@assets/images/solutions/crm.jpg';
import { crmInfo, ContentBlock } from '@/components';

const Crm = () => {
  return (
    <div id="crm">
      <Row className="align-items-center">
        <Col xxl={7}>
          <Image src={crm} alt="crm" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
        <Col xxl={5}>
          <ContentBlock
            title={crmInfo.title}
            description={crmInfo.description}
            contentBackground="sky-blue"
            endOverLayed
          />
        </Col>
      </Row>
    </div>
  );
};

export default Crm;
