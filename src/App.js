import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import { Container, Row, Col } from 'react-grid-system';
import CategoryRadio from './CategoryRadio';
import SortSelect from './SortSelect'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: 'all',
      sortOption: 'Featured',
      categories: [],
    };

  }

  //The original data set with an index added to allow the return to the "Featured" sort method.  Which sorts by
  //the original data sequence
  originalItemSort = data.map((item, index) => {
    item['index'] = index;
    return item;
  });

  //Category Filter set in the Category Radio component.  Categories are defined in the data.
  setCategoryFilter = (categoryFilter) => {
    this.setState({categoryFilter: categoryFilter})
  };

  //Sort Option set in the Sort Select Component.  Sort method is hard coded.
  setSortOption = (event) => {
    this.setState({sortOption: event.target.value});
  };

  //Sort available options based on sort method selected in SortSelect
  sortGrid = (sortOption, originalItemSort) => {
    //Original sorting of grid
    if (sortOption === 'Featured') {
      return originalItemSort.sort((a, b) => a.index - b.index);
    }
    //Alphabetical sorting of grid
    else if (sortOption === 'Alphabetical') {
      return originalItemSort.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    //Priority sorting of grid
    else if (sortOption === 'Priority') {
      return originalItemSort.sort((a, b) => a.priority - b.priority);
    }
  };

  //Background colors are definited by Priority
  backgroundColor = (priority) => {
    if (priority === 1) {
      return 'Orange'
    }
    else if (priority === 2) {
      return 'Green'
    }
    else if (priority === 3) {
      return 'Blue'
    }
    else {
      return 'Purple'
    }
  };

  render() {
    //Initial category value
    let categories = ['all'];

    //Add any unique categories found
    for (let i=0; i < data.length; i++) {
      if (categories.indexOf(data[i].category) === -1) {
        categories.push(data[i].category);
      }
    }

    //Sort grid items based on this.state.sortOption, which is set in SortSelect
    const sortedItems = this.sortGrid(this.state.sortOption, this.originalItemSort);
    const gridItems = sortedItems.map((item, index) => {
      return (this.state.categoryFilter === item.category || this.state.categoryFilter === 'all') ?
           <div className="App-grid-item" style={{background: this.backgroundColor(item.priority)}} key={index.toString()}>
            <h2 className="App-h2">{item.name}</h2>
            <div className="App-age">{item.age}</div>
            <div className="App-category">{item.category}</div>
          </div> : '';
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Zola React Grid</h1>
        </header>
        <Container>
          <Row>
            <Col sm={4}>
              <CategoryRadio categoryFilter={this.state.categoryFilter}
                             categories={categories} setCategoryFilter={this.setCategoryFilter}/>
              <SortSelect sortOption={this.state.sortOption} setSortOption={this.setSortOption}/>
            </Col>
            <Col sm={8}>
              {gridItems}
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
