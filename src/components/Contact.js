import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
  constructor(props){
    super(props);
      this.state = {
          isChecked:true
      }
  }
    onClick = (value)=>{
      this.setState({
        isChecked:value
      })
    }
  render() {
    var {isChecked} = this.state;
    return (
      <div>
          đây là Contact <br/>
        <button type={'button'} className={'btn btn-info'} onClick={()=>this.onClick(false)}> Cho phép </button> <br/>
        <button type={'button'} className={'btn btn-warning'} onClick={()=>this.onClick(true)} >Không cho phép</button>
        <Prompt when={isChecked} message={location => (`Bạn muốn chắc rời đi ${location.pathname}`) } />
      </div>
    );
  }
}

export default Contact;
