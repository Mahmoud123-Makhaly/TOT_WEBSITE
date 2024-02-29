import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';

import { lastMilelInfo, ContentBlock } from '@/components';
import lastMile from '@assets/images/solutions/lastMile.jpg';

const LastMile = () => {
  return (
    <div id="lastMile-solution" className="lastMile-solution">
      <Row className=" flex-column-reverse flex-xxl-row">
        <Col xxl={4}>
          <ContentBlock
            title={lastMilelInfo.title}
            description={lastMilelInfo.description}
            contentBackground="AntiqueWhite"
          />
        </Col>
        <Col xxl={8}>
          <Image src={lastMile} alt="lastMile" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
      </Row>
    </div>
  );
};

export default LastMile;
