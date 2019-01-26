import React, { Component } from 'react';
import ToiletBgd from '../toiletbackground.PNG';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './pages.css';
import find from '../findtoilet.PNG';
import rate from '../ratetoilet.PNG';

class Home extends Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  handleChange(){
    this.setState({loaded: true})
  }

  render(){
    return(
      <div>
        <div className='blueSection'>
          <img src={ToiletBgd} alt="toiletbackground" width="100%"/>
        </div>

        <div className='bottomHome'>
            <div className='findToilet'>
              <img src={find} alt="find toilet" />
            </div>

            <div className='rateToilet'>
              <img src={rate} alt="rate toilet" />
            </div>

        </div>
      </div>
    )
  }
}


export default Home;
