import React, { Component } from 'react';


class Product extends Component {
  render() {
      var {match} = this.props;
      var slug = match.params.slug;
      console.log(slug);
    return (
      <div>
          đây là Product
      </div>
    );
  }
}

export default Product;
