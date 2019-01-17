import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      topLeft:false,
      topRight:false,
      bottomLeft:false,
      bottomRight:false
    }
  }

  open(corner){
    this.setState({
      [corner]:!this.state.corner
    })
  }

  close(corner){
    this.setState({
      [corner]:false
    })
  }

  topLeft(){
    if(this.state.topLeft){return('contentTopLeftOpen')}
    return('contentTopLeft')
  }

  topRight(){
    if(this.state.topRight){return('contentTopRightOpen')}
    return('contentTopRight')
  }

  bottomLeft(){
    if(this.state.bottomLeft){return('contentBottomLeftOpen')}
    return('contentBottomLeft')
  }

  bottomRight(){
    if(this.state.bottomRight){return('contentBottomRightOpen')}
    return('contentBottomRight')
  }

  render() {

    let who="I'm a developer and product manager living in Chicago, IL. I'm graduating from Northwestern University in the Class of 2019 with a double major in Computer Science and Music Engineering."

    return (
      <div className='app'>
        <div className='headerName'>Ryan McHenry.</div>

        <div className='tagTopLeft' onClick={()=>this.open('topLeft')}>who i am</div>

        <div className={this.topLeft()} onClick={()=>this.close('topLeft')}>
          hi. my name is ryan.
          <br/>
          - software developer / product manager
          <br/>
          - living in Chicago, IL.
          <br/>
          - from Philadelphia, PA.
          <br/>
          - Northwestern University Class of 2019
          <br/>
          - double major in Computer Science and Music Engineering
        </div>

        <div className='tagTopRight' onClick={()=>this.open('topRight')}>what i do</div>

        <div className={this.topRight()} onClick={()=>this.close('topRight')}>
          <b>Blueprint Alpha</b>
          <br/>
          <div>Product Manager (January 2018 - present)</div>
          <br/>
          <b>Mission Measurement</b>
          <br/>
          <div>Product Manager (September 2018 - January 2019)</div>
        </div>

        <div className='tagBottomLeft' onClick={()=>this.open('bottomLeft')}>what i look like</div>

        <div className={this.bottomLeft()} onClick={()=>this.close('bottomLeft')}>
          <div className='textBottomLeft'>Heyo!</div>
          <br/>
          <img src='/img/headshot.jpg' className='imgBottomLeft'/>
        </div>

        <div className='tagBottomRight' onClick={()=>this.open('bottomRight')}>contact</div>

        <div className={this.bottomRight()} onClick={()=>this.close('bottomRight')}>
          <b>LinkedIn</b>
          <br/>
          <a href='https://www.linkedin.com/in/ryanmchenry2/'>@ryanmchenry2</a>
          <br/>
          <b>GitHub</b>
          <br/>
          <a href='https://www.github.com/ryanmchenry2/'>@ryanmchenry2</a>
        </div>
      </div>
    );
  }
}

export default App;
