import React from 'react';
import { InputGroup, FormControl, Row } from 'react-bootstrap';
import './search.style.css';

export default function Search(props) {
  let { handleChange, userSearch } = props;
  return (
    <div className="search-bar-div">
      <InputGroup>
        <FormControl
          placeholder="Stock name"
          onChange={handleChange}
          value={userSearch}
          name="userSearch"
        />
      </InputGroup>
      <Row className="search-by-row">
        <p>Search by name</p>
      </Row>
    </div>
  );
}
