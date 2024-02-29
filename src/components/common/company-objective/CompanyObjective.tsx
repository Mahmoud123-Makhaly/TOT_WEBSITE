import React from 'react';
import { Row, Col } from 'reactstrap';

interface ICompanyObjectiveProps {
  title?: string;
  boldDescription?: string;
  description?: string;
  backgroundImg?: string;
  id?: string;
  className?: string;
  reverse?: boolean;
}
const CompanyObjective = (props: ICompanyObjectiveProps) => {
  const { title, boldDescription, description, backgroundImg, id, className, reverse } = props;
  return (
    <div
      className={`company-objective text-white ${className} my-42 border-raduis-4`}
      id={id}
      style={{ background: `url(${backgroundImg})` }}
    >
      <Row className={`${reverse && 'flex-row-reverse'} `}>
        <Col className="col-lg-7">
          {title && <div className="fw-bold m-0 font-40 title">{title}</div>}
          {boldDescription && <p className="m-0 font-24 bold-desc line-height-36">{boldDescription}</p>}
          {description && <p className="desc font-16 desc p-0 m-0">{description}</p>}
        </Col>
        <Col lg={5}></Col>
      </Row>
    </div>
  );
};

export default CompanyObjective;
