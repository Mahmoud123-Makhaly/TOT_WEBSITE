import React from 'react';

interface IFieldDescriptionProps {
  title?: string | React.ReactNode;
  description?: Array<string>;

  className?: string;
  contentBackground?: string;
  startOverLayed?: boolean;
  endOverLayed?: boolean;
}
const ContentBlock = (props: IFieldDescriptionProps) => {
  const { title, description, className, contentBackground, endOverLayed } = props;
  return (
    <div
      className={`content-block ${endOverLayed && 'end-overlayed '} bg-${contentBackground} ${
        className && className
      }   border-raduis-23`}
    >
      <div className="title font-24 fw-bold text-primary mb-2">{title}</div>

      {description?.map((item: any, index: any) => (
        <p key={index} className="m-0 text-dark-gray desc">
          {item}
        </p>
      ))}
    </div>
  );
};

export default ContentBlock;
