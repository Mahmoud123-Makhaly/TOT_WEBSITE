'use client';

import React from 'react';
import { Container, Row } from 'reactstrap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { ButtonMaker } from '@components';

interface IBannerProps {
  imgSrc?: string | StaticImport;
  imgAlt?: string;
  title?: Array<string>;
  description?: Array<string>;
  buttonText?: string;
  buttonOnClick?: () => void;
  className?: string;
  contentSpace?: string;
  imageSpace?: string;
  reverse?: boolean;
  backgroundImg?: string | StaticImport;
}
const Banner = (props: IBannerProps) => {
  const {
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    className,
    contentSpace,
    imageSpace,
    reverse,
    backgroundImg,
    buttonOnClick,
  } = props;
  return (
    <div
      className={`banner ${className} d-flex align-items-center`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Container>
        <div className="banner-info">
          <Row className={`align-items-center  ${reverse ? 'flex-row-reverse' : ''} `}>
            <div className={contentSpace ? contentSpace : 'col-sm-5'}>
              <div className="banner-content">
                {title &&
                  title.map((item: string, index: number) => (
                    <h2 key={index} className="title font-40 font-weight-600 text-primary  m-0">
                      {item}
                    </h2>
                  ))}
                {description &&
                  description.map((item: string, index: number) => (
                    <p key={index} className="desc font-16 text-dark-gray my-3">
                      {item}
                    </p>
                  ))}
                {buttonText && (
                  <ButtonMaker
                    onClick={() => {
                      buttonOnClick && buttonOnClick();
                    }}
                    btnText={buttonText}
                    className="fw-semibold"
                  />
                )}
              </div>
            </div>
            <div className={imageSpace ? imageSpace : 'col-sm-7'}>
              <div className="banner-img text-center">
                <Image src={imgSrc ? imgSrc : ''} alt={imgAlt ? imgAlt : ''} className="W-100" />
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
