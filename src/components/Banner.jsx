import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className='banner_container'>
        <img className='banner_image' src={this.props.img} alt='banner_image'/>
        <div className='banner_title'>{this.props.title}</div>
        <div className='banner_subtitle'>{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Banner;
