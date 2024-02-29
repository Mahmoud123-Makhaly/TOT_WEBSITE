import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'reactstrap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface IMiniCardProps {
  imgSrc?: string | StaticImport;
  text?: string;
  className?: string;
  title?: string;
  mobileBackground?: string;
  desktopBackground?: string;
}
const MiniCard = (props: IMiniCardProps) => {
  const { className, imgSrc, text, title, mobileBackground, desktopBackground } = props;
  return (
    <div className={`mini-card ${mobileBackground} ${className} `}>
      <Row>
        <Col lg={5} xl={4}>
          <div className={`mini-card-img ${desktopBackground}`}>
            <Image src={imgSrc ? imgSrc : ''} alt="mini-card-img" />
          </div>
        </Col>
        <Col lg={7} xl={8}>
          {title && <h5 className="m-0 mini-card-tile fw-bold pb-2 font-16">{title}</h5>}
          {text && <p className="mini-card-text">{text}</p>}
        </Col>
      </Row>
    </div>
  );
};

export default MiniCard;
