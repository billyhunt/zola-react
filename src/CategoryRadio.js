import React, { Component } from 'react';
import './CategoryRadio.css'

//Radio Button to Select Categories
class CategoryRadio extends Component {

  render() {
    const radioButtons = this.props.categories.map((category, index) =>
        <div key={index} className="radio">
          <label>
            <input type="radio" value="category" onChange={() => this.props.setCategoryFilter(category)} checked={this.props.categoryFilter === category} />
            <span className="label">{category}</span>
          </label>
        </div>
      );

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Category Filter</h3>
            <form>
              {radioButtons}
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default CategoryRadio;



