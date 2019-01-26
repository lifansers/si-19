import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './pages.css';

class Add extends Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  handleChange(){
    this.setState({loaded: true})
  }

  render(){
    return(
      <div></div>
    )
  }
}


export default Add;
