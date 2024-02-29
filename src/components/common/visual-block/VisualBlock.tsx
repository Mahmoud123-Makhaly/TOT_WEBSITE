import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'reactstrap';

interface IVisualBlockProps {
  backgroundColor?: string;
  borderRaduis?: string;
  reverse?: boolean;
  DetailsSpace?: string;
  imageSpace?: string;
  imgSrc?: string | StaticImport;
  imgAlt?: string;
  CardInfo?: React.ReactNode;
  className?: string;
}
const VisualBlock = (props: IVisualBlockProps) => {
  const {
    backgroundColor,
    borderRaduis,
    reverse,
    DetailsSpace,
    imageSpace,
    imgSrc = '',
    imgAlt = '',
    CardInfo,
    className,
  } = props;
  return (
    <div
      className={`visual-block p-5  bg-${backgroundColor} border-raduis-${borderRaduis} ${className ? className : ''}`}
    >
      <Row className={`align-items-center   ${(reverse && 'flex-row-reverse ') || undefined}`}>
        <div className={`${DetailsSpace ? DetailsSpace : 'col-lg-6'}`}>{CardInfo}</div>
        <div className={`${imageSpace ? imageSpace : 'col-lg-6'}`}>
          <div className="visual-img">
            <Image src={imgSrc} alt={imgAlt} width={0} height={0} className="mb-3 mb-lg-0" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default VisualBlock;
