
import React, { Component } from 'react';
import './App.css';

class SortSelect extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Sort Method</h3>
            <select value={this.props.sortOption} onChange={this.props.setSortOption}>
              <option value="Featured">Featured</option>
              <option value="Alphabetical">Alphabetical</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SortSelect;



