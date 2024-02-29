import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ListModule } from '@/components';
import messages from '@assets/images/markets/messages.png';
import check from '@assets/images/markets/check.svg';
const Messages = () => {
  const marketMessages = [
    {
      imgSrc: check,
      imgAlt: 'check',
      text: 'A user-friendly interface that makes it easy for customers to shop',
      design: 'message_item',
    },
    {
      imgSrc: check,
      imgAlt: 'check',
      text: 'Powerful marketing tools to help you reach new customers',
      design: 'message_item',
    },
    {
      imgSrc: check,
      imgAlt: 'check',
      text: 'Secure payment processing to protect your customers  data',
      design: 'message_item',
    },
    {
      imgSrc: check,
      imgAlt: 'check',
      text: 'Secure payment processing to protect your customers data',
    },
  ];
  return (
    <div className="mt-42 market_message">
      <Row>
        <Col lg={6}>
          <div className="market_img">
            <Image src={messages} width={0} height={0} alt="messages" />
          </div>
        </Col>
        <Col lg={6}>
          <ListModule title="Marketing Messages:" listItems={marketMessages} />
        </Col>
      </Row>
    </div>
  );
};

export default Messages;
