import React from 'react';
import './stocks.style.css';
import Stockcard from '../Stockcard/stock.card';
import { Container, Row, Col } from 'react-bootstrap';

export default function Stocks(props) {
  let { stocks } = props;
  return (
    <div>
      <Container>
        <Row>
          {
            stocks.map((stock, i) => (
              <Col lg={3} md={6} sm={12} xs={12} key={i}>
                <Stockcard
                  stock={stock}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}
