import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import { Row, Col } from 'react-grid-system'
import GridItem from 'GridItem'

class GridItem extends Component {


  render() {
    const gridItems = data.map((item, index) => {
          return <div className="App-grid-item" key={index}>
            <h2 className="App-h2">{item.name}</h2>
            <div className="App-age">{item.age}</div>
            <div className="App-category">{item.category}</div>
          </div>;

    });

    console.log(gridItems);

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    let categories = [];

    for (let i=0; i < data.length; i++) {
      if (categories.indexOf(data[i].category) === -1) {
        categories.push(data[i].category);
      }
    }

    let categoryButtons = categories.map((item, index) =>
      <Col key={index} md={4}><button key={index} onClick={handleClick}>{item}</button></Col>);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CYNTHIA & WILLIAM</h1>
        </header>
        <Row>
          {categoryButtons}
        </Row>
            {gridItems}
      </div>
    );
  }
}

export default GridItem;
