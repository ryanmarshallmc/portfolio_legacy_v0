import React, { Component } from 'react';

class Card extends Component {

  renderExtraLines(){
    if (this.props.line3){
      return(
        <div>
          <div className='card-role'>{this.props.line2}</div>
          <div className='card-line'>{this.props.line3}</div>
        </div>
      )
    }
    else if (this.props.line2){
      return(
        <div className='card-role'>{this.props.line2}</div>
      )
    }
    else{return}
  }

  render() {
    return (
      <div className='card'>
        <a href={this.props.link} target="_blank">
          <img className='card-img' src={this.props.img} />
        </a>
        <div className='card-title'>{this.props.title}</div>
        <div className='card-role'>{this.props.role}</div>
        <div className='card-line'>{this.props.line1}</div>
        {this.renderExtraLines()}
      </div>
    );
  }
}

export default Card;
