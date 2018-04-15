import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        var {userName,password} = this.state;
        if(userName === 'admin' && password === 'admin'){
            localStorage.setItem('login',JSON.stringify(this.state));
        }

    }
  render() {
      var login = localStorage.getItem('login');
      if(login){
          var {location}=this.props;
          return <Redirect to={{
              pathname:'/products',
              state:{
                  from:location
              }
          }} />
      }

    return (
      <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-6 col-md-offset-3'}>
              <legend>Đăng nhập</legend>
                <form onSubmit={this.onSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="">User Name</label>
                        <input type="text" onChange={this.onChange} className={'form-control'} name={'userName'}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={this.onChange}  className={'form-control'} name={'password'}/>
                    </div>
                  <button type={'submit'} className={'btn btn-success'}>Đăng nhập</button>
                </form>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
