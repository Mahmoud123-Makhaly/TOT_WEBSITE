import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface IFigureProps {
  imgSrc: string | StaticImport;
  imgAlt: string;
  text: string;
  className?: string;
}
const Figure = (props: IFigureProps) => {
  const { imgSrc, imgAlt, text, className } = props;
  return (
    <div className={`figure position-relative ${className}`}>
      <Image src={imgSrc} alt={imgAlt} />
      <div className="figure-content position-absolute bottom-0 bg-primary text-white w-100 text-center rounded-bottom">
        <p className="m-0 text font-24 font-weight-600">{text}</p>
      </div>
    </div>
  );
};

export default Figure;
