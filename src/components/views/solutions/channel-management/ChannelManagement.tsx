import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ContentBlock, channelInfo } from '@/components';
import channel from '@assets/images/solutions/channel.jpg';

const ChannelManagement = () => {
  return (
    <div id="channel-management" className="channel-management">
      <Row className="align-items-center flex-column-reverse flex-xxl-row">
        <Col xxl={4}>
          <ContentBlock
            title={channelInfo.title}
            description={channelInfo.description}
            contentBackground="AntiqueWhite"
          />
        </Col>
        <Col xxl={8}>
          <Image src={channel} alt="channel" width={0} height={0} className="img-responsive mb-3 mb-xxl-0" />
        </Col>
      </Row>
    </div>
  );
};

export default ChannelManagement;
