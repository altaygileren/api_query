import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './stock.card.style.css';
import currencyFormatter from 'currency-formatter';

export default function Stockcard(props) {
  let { stock } = props;
  return (
    <Card className="stock-card-div">
      <Card.Body>
        <Card.Title>{stock.symbol}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{stock.name}</Card.Subtitle>
          <ListGroup className="list-style-group" variant="flush">
            <ListGroup.Item>Price: {currencyFormatter.format(stock.price, { code: 'USD' })}</ListGroup.Item>
            <ListGroup.Item>Open: {currencyFormatter.format(stock.open, { code: 'USD' })}</ListGroup.Item>
            <ListGroup.Item>Close: {currencyFormatter.format(stock.previousClose, { code: 'USD' })}</ListGroup.Item>
            <ListGroup.Item>52-week high: {currencyFormatter.format(stock.yearHigh, { code: 'USD' })}</ListGroup.Item>
            <ListGroup.Item>52-week low: {currencyFormatter.format(stock.yearLow, { code: 'USD' })}</ListGroup.Item>
          </ListGroup>
      </Card.Body>
    </Card>
  );
}
