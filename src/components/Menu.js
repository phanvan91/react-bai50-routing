import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

const menus = [
    {
        name:'Trang chủ',
        to:'/',
        exact:true
    },
    {
        name:'About',
        to:'/about',
        exact:false
    },
    {
        name:'Contact',
        to:'/contact',
        exact:false
    },
    {
        name:'Sản phẩm',
        to:'/products',
        exact:false
    },
    {
        name:'Đăng nhập',
        to:'/login',
        exact:false
    },
]


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
class Menu extends Component {

    render() {
        // console.log(menus);
        return (
            <nav className="navbar navbar-default" >
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
    showMenu = (menus) => {
        var reuslt = null;
        if(menus.length > 0){
            reuslt = menus.map((menu,index) => {
                return <MenuLink key={index} label={menu.name} to={menu.to}  activeOnlyWhenExact={menu.exact}/>
            })
        }
        return reuslt;
    }
}

export default Menu;
