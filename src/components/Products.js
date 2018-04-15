import React, { Component } from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import Product from "./Product";
const MenuLink = ({ label,to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact === true } children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`my-li ${active}` }> <Link  to={to} className={'my-link'}> {label} </Link> </li>
            )
        }} />
    )
}

class Products extends Component {
    showProducts = (products) => {
        var result = null;
        var url = this.props.match.url;
        if(products.length>0){
            result = products.map((product,index)=>{
                return (
                    <NavLink key={index} to={`${url}/${product.slug}`}>
                        <li className="list-group-item"> {product.id} - {product.name} - {product.price} </li>
                    </NavLink>
                )
            })
        }
        return result;
    }
  render() {

    var products = [
        {
          id:1,
          name:'Iphone X',
            slug:'iphone',
          price:5000000
        },
        {
            id:2,
            name:'SamSung Glaxy Note X',
            slug:'SamSung',
            price:5000000
        },
        {
            id:3,
            name:'Oppo F1s',
            slug:'opplo',
            price:300000
        }
    ];
    var {location} = this.props;
    console.log(location)
    return (
      <div>
          <h1>Đây là danh sách sản phẩm</h1>
        <div className={'container'}>
            <div className={'row'}>
                <ul className="list-group text-center">
                    {this.showProducts(products)}
                </ul>
            </div>
          <div className={'row'}>
            <Route path="/products/:slug" component={Product}/>
          </div>
        </div>
      </div>
    );
  }



}

export default Products;
