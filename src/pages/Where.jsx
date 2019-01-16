import React, { Component } from 'react';
import Banner from '../components/Banner';

class Where extends Component {
  render() {
    return (
      <div>
        <Banner title='where:' subtitle='to find me.' img='/img/where.jpg'/>
        <div className='card-container'>
          <a className='where-icon-link' href="mailto:ryanmchenry2@gmail.com" target="_blank">
            <img className='where-icon' src='/img/email.png' />
          </a>
          <a className='where-icon-link' href="https://github.com/ryanmchenry2" target="_blank">
            <img className='where-icon' src='/img/git.png' />
          </a>
          <a className='where-icon-link' href="https://facebook.com/ryanmchenry2" target="_blank">
            <img className='where-icon' src='/img/facebook.png' />
          </a>
          <a className='where-icon-link' href="https://linkedin.com/in/ryanmchenry2" target="_blank">
            <img className='where-icon' src='/img/linkedin.png' />
          </a>
        </div>
      </div>
    );
  }
}

export default Where;
