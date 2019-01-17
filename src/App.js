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
      bottomRight:false,
      width: window.innerWidth,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleTopLeft(){
    this.setState({
      topLeft:!this.state.topLeft,
      topRight:false,
      bottomLeft:false,
      bottomRight:false
    })
  }

  toggleTopRight(){
    this.setState({
      topLeft:false,
      topRight:!this.state.topRight,
      bottomLeft:false,
      bottomRight:false
    })
  }

  toggleBottomLeft(){
    this.setState({
      topLeft:false,
      topRight:false,
      bottomLeft:!this.state.bottomLeft,
      bottomRight:false
    })
  }

  toggleBottomRight(){
    this.setState({
      topLeft:false,
      topRight:false,
      bottomLeft:false,
      bottomRight:!this.state.bottomRight
    })
  }

  topLeft(){
    if(this.state.topLeft){return('contentTopLeftOpen')}
    return('contentTopLeftMobile')
  }

  topRight(){
    if(this.state.topRight){return('contentTopRightOpen')}
    return('contentTopRightMobile')
  }

  bottomLeft(){
    if(this.state.bottomLeft){return('contentBottomLeftOpen')}
    return('contentBottomLeftMobile')
  }

  bottomRight(){
    if(this.state.bottomRight){return('contentBottomRightOpen')}
    return('contentBottomRightMobile')
  }

  render() {

    const {width} = this.state;
    const isMobile = width <= 1000;
    if (isMobile){
      return (
        <div className='app'>
          <div className='headerName'>Ryan McHenry.</div>

          <div className='tagTopLeft' onClick={()=>this.toggleTopLeft()}>who i am</div>

          <div className={this.topLeft()} onClick={()=>this.toggleTopLeft()}>
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

          <div className='tagTopRight' onClick={()=>this.toggleTopRight()}>what i do</div>

          <div className={this.topRight()} onClick={()=>this.toggleTopRight()}>
            <b>Blueprint Alpha</b>
            <br/>
            <div>Product Manager (January 2018 - present)</div>
            <br/>
            <b>Mission Measurement</b>
            <br/>
            <div>Product Manager (September 2018 - January 2019)</div>
          </div>

          <div className='tagBottomLeft' onClick={()=>this.toggleBottomLeft()}>what i look like</div>

          <div className={this.bottomLeft()} onClick={()=>this.toggleBottomLeft()}>
            <b>Heyo!</b>
            <img src='/img/bio.jpg' className='imgBottomLeft'/>
          </div>

          <div className='tagBottomRight' onClick={()=>this.toggleBottomRight()}>contact</div>

          <div className={this.bottomRight()} onClick={()=>this.toggleBottomRight()}>
            <br/>
            <a href='https://www.linkedin.com/in/ryanmchenry2/'><b>LinkedIn</b></a>
            <br/><br/>
            <a href='https://www.github.com/ryanmchenry2/'><b>GitHub</b></a>
            <br/><br/>
            <a href='https://www.facebook.com/ryanmchenry2/'><b>Facebook</b></a>
            <br/><br/>
            <a href='mailto:ryanmchenry2@gmail.com'><b>Email</b></a>
            <br/><br/>
          </div>
        </div>
      );
    }
    return (
      <div className='app'>
        <div className='headerName'>Ryan McHenry.</div>

        <div className='tagTopLeft'>who i am</div>

        <div className='contentTopLeft'>
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

        <div className='tagTopRight'>what i do</div>

        <div className='contentTopRight'>
          <b>Blueprint Alpha</b>
          <br/>
          <div>Product Manager (January 2018 - present)</div>
          <br/>
          <b>Mission Measurement</b>
          <br/>
          <div>Product Manager (September 2018 - January 2019)</div>
        </div>

        <div className='tagBottomLeft'>what i look like</div>

        <div className='contentBottomLeft'>
          <b>Heyo!</b>
          <img src='/img/bio.jpg' className='imgBottomLeft'/>
        </div>

        <div className='tagBottomRight'>contact</div>

        <div className='contentBottomRight'>
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
