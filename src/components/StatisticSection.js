import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const StatisticBlock = ({ value, label }) => (
  <Col xs="4" lg="4">
    <Form>
      <Form.Group>
        <Form.Label className="fw-bold ft-5 mb-0">{value}</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label className="ft-5">{label}</Form.Label>
      </Form.Group>
    </Form>
  </Col>
);


const StatisticsSection = () => (
  <Row className="row row-cols-1">
    <StatisticBlock value="1200" label="Worthy Coins" />
    <StatisticBlock value="5324" label="Supporters" />
    <StatisticBlock value="1532" label="Supporting" />
    <StatisticBlock value="1200" label="Likes" />
    <StatisticBlock value="5324" label="Assets" />
  </Row>
);

export default StatisticsSection;
