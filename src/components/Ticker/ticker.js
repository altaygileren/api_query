import React from 'react';
import './ticker.style.css';
import { Card } from 'react-bootstrap';
import Ticker from 'react-ticker';
import currencyFormatter from 'currency-formatter';

let checkPrice = (currentPrice, openPrice) => {
  if (currentPrice > openPrice) {
    return 'success'
  }
  return 'danger'
}
let checkDifference = (currentPrice, openPrice) => {
  return currencyFormatter.format(currentPrice - openPrice, { code: 'USD' });
}

export default function Tickerlist(props) {
  let { stocks } = props;
  return (
    <>
      {
        stocks.length > 0 ? (
          <Ticker>
            {({ index }) => (
              <>
                <Card
                  bg={`${stocks[index].price && stocks[index].open ? (checkPrice(stocks[index].price, stocks[index].open)) : (null)}`}
                  className="ticker-card"
                >
                  <Card.Header>{stocks[index].name ? (<span>{stocks[index].name}</span>) : (null)}</Card.Header>
                  <Card.Body>
                    <Card.Title>{stocks[index].symbol ? (<span>{stocks[index].symbol}</span>) : null}</Card.Title>
                    <Card.Text>
                      {stocks[index].price && stocks[index].open ? (checkDifference(stocks[index].price, stocks[index].open)) : (null)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            )}
          </Ticker>
        ) : (null)
      }
    </>
  );
}
