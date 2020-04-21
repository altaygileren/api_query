import React, { Component } from 'react';
import { infoGet } from './util';
import { Container, Row } from 'react-bootstrap';
import Tickerlist from './components/Ticker/ticker';
import Search from './components/Search/search';
import Stocks from './components/Stocks/stocks';
import './App.css';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tickerList: [],
      userSearch: ''
    }
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
  }
  searchStock = (value) => {
    let filterInfo = this.state.tickerList.filter(data => data.name.toLowerCase().includes(value));
    return filterInfo;
  }
  fetch = async () => {
    const tickerInfo = await infoGet('http://localhost:1337/api-call');
    this.setState({ tickerList: tickerInfo.data })
  }
  componentDidMount = () => {
    this.fetch();
  }

  render() {
    let { tickerList } = this.state;
    const visibleList = this.state.userSearch ? this.searchStock(this.state.userSearch) : tickerList;

    return (
      <div className="myApp">
        <Tickerlist
          stocks={tickerList}
        />
        <Container>
          <Row>
            <Search
              handleChange={this.handleChange}
              userSearch={this.state.userSearch}
            />
          </Row>
        <Stocks
          stocks={visibleList}
        />
      </Container>
    </div>
    )
  }
}

