'use client';
import React from 'react';
import { Form, Input, Button } from 'reactstrap';

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faqs-content">
        <h4 className="mb-0 pb-3 font-24 fw-bold text-primary">
          FAQ<span className='font-20'>s</span>
        </h4>
        <Form>
          <Input className="mb-3" type="select">
            <option>What is segmentation in marketing?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
          </Input>
          <Input className="mb-3" type="select">
            <option>What is audience segmentation?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>{' '}
          </Input>
          <Input className="mb-3  " type="select">
            <option>What are marketing segmentation variables?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
          </Input>
          <Input className="mb-3  " type="select">
            <option>How can audience segmentation enhance your inbound marketing efforts?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
          </Input>
          <Input className="mb-3  " type="select">
            <option>What are the benefits of audience segmentation?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
          </Input>{' '}
          <Input className="mb-3  " type="select">
            <option>What are some tips for creating audience segments?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
            <option>What is the industry you provide?</option>
          </Input>
        </Form>
      </div>
    </div>
  );
};

export default Faqs;
