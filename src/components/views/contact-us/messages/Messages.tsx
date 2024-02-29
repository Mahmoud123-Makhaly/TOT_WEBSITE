import React from 'react';
import { ListModule, VisualBlock } from '@/components';
import questions from '@assets/images/contact-us/questions.png';
import check from '@assets/images/markets/check.svg';

const Messages = () => {
  const MessagesList = [
    { imgSrc: check, imgAlt: 'check', text: 'Less than 12-hour response to your question.' },
    { imgSrc: check, imgAlt: 'check', text: 'Thoroughness and expertise of a Certified Exchange Specialist' },
    { imgSrc: check, imgAlt: 'check', text: 'Plan of action summarized in an email follow up.' },
  ];
  return (
    <VisualBlock
      backgroundColor="light-purple"
      imgSrc={questions}
      imgAlt="questions"
      className="messages"
      borderRaduis="23"
      DetailsSpace="col-xl-7"
      imageSpace="col-xl-5"
      CardInfo={<ListModule title="What You Get When Asking Your Question" listItems={MessagesList} />}
    />
  );
};

export default Messages;
