import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IMediaOverlayCardProps {
  imgSrc?: string | StaticImport;
  imgAlt?: string;
  className?: string;
  text?: string;
  textPosition?: { left: string; bottom: string };
  textColor?: string;
  textize?: string;
  textCenter?: boolean;
}
const MediaOverlayCard = (props: IMediaOverlayCardProps) => {
  const { imgSrc = '', imgAlt = '', className, text, textPosition, textColor, textize, textCenter } = props;
  return (
    <div className={`position-relative   ${className} overflow-hidden media-card`}>
      <Image src={imgSrc} alt={imgAlt} width={0} height={0} className="w-100 h-100" />
      <p
        className={`text-${textColor} font-${textize} position-absolute mb-0 fw-bold line-height-36 desc ${
          textCenter && 'start-50 top-50 translate-middle'
        }`}
        style={{ bottom: textPosition?.bottom, left: textPosition?.left }}
      >
        {text}
      </p>
    </div>
  );
};

export default MediaOverlayCard;
