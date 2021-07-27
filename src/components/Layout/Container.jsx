import { Col, Row } from "antd";
import React from "react";

export default function Container({ children }) {
  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={22}>
        {children}
      </Col>
    </Row>
  );
}
