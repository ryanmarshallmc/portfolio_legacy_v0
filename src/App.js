import React, { Component } from 'react'
import ReactGA from 'react-ga'
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

    ReactGA.initialize('UA-132778259-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    const {width} = this.state;
    const isMobile = width <= 1000;
    if (isMobile){
      return (
        <div className='app'>
          <div className='headerName'>Ryan McHenry.</div>

          <div className='tagTopLeft' onClick={()=>this.toggleTopLeft()}>who i am</div>

          <div className={this.topLeft()} onClick={()=>this.toggleTopLeft()}>
            <b style={{fontSize:'1.2em'}}>hi. my name is ryan.</b>
            <br/><br/>
            - software dev / product manager
            <br/><br/>
            - northwestern university c/o 2019
            <br/><br/>
            - double major in CS and music
            <br/><br/>
            - from Philadelphia, PA
            <br/><br/>
            - living in Chicago, IL
            <br/><br/>
          </div>

          <div className='tagTopRight' onClick={()=>this.toggleTopRight()}>what i do</div>

          <div className={this.topRight()} onClick={()=>this.toggleTopRight()}>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href='https://blpt.co'><img alt='' src='/img/blpt.png' className='workImgMobile'/></a>
            <br/>
            <b>Blueprint Alpha</b>
            <br/>
            <div>Product Manager<br/>(January 2018 - present)</div>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href='https://impactgenome.org'><img alt='' src='/img/mm.png' className='workImgMobile'/></a>
            <br/>
            <b>Mission Measurement</b>
            <br/>
            <div>Product Manager<br/>(September 2018 - January 2019)</div>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href='https://tedxchicago.com'><img alt='' src='/img/ted.jpg' className='workImgMobile'/></a>
            <br/>
            <b>TEDxChicago</b>
            <br/>
            <div>Speaker Coordinator<br/>(September 2017 - present)</div>
            <br/>
          </div>

          <div className='tagBottomLeft' onClick={()=>this.toggleBottomLeft()}>here i am</div>

          <div className={this.bottomLeft()} onClick={()=>this.toggleBottomLeft()}>
            <b style={{fontSize:'1.2em'}}>heyo!</b>
            <img alt='' src='/img/bio.jpg' className='imgBottomLeft'/>
          </div>

          <div className='tagBottomRight' onClick={()=>this.toggleBottomRight()}>contact</div>

          <div className={this.bottomRight()} onClick={()=>this.toggleBottomRight()}>
            <b style={{fontSize:'1.2em'}}>I like talkin to folks!</b>
            <br/><br/>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ryanmchenry2/'>
              <img alt='' src='/img/linkedin.png' className='contactImgMobile' />
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/ryanmchenry2/'>
              <img alt='' src='/img/git.png' className='contactImgMobile' />
            </a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/ryanmchenry2/'>
              <img alt='' src='/img/facebook.png' className='contactImgMobile' />
            </a>
            <a href='mailto:ryanmchenry2@gmail.com'>
              <img alt='' src='/img/email.png' className='contactImgMobile' />
            </a>
          </div>
        </div>
      );
    }
    return (
      <div className='app'>
        <div className='headerName'>Ryan McHenry.</div>

        <div className='tagTopLeft'>who i am</div>

        <div className='contentTopLeft'>
          <b style={{fontSize:'1.2em'}}>hi. my name is ryan.</b>
          <br/>
          - software dev / product manager
          <br/>
          - northwestern university c/o 2019
          <br/>
          - double major in CS and music
          <br/>
          - from Philadelphia, PA
          <br/>
          - living in Chicago, IL
        </div>

        <div className='tagTopRight'>what i do</div>

        <div className='contentTopRight'>
          <b style={{fontSize:'1.2em'}}>I'm passionate about<br/>software with a purpose.</b>
          <br/><br/>
          <a target="_blank" rel="noopener noreferrer" href='https://blpt.co'><img alt='' src='/img/blpt.png' className='workImg'/></a>
          <br/>
          <b>Blueprint Alpha</b>
          <br/>
          <div>Product Manager<br/>(January 2018 - present)</div>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href='https://impactgenome.org'><img alt='' src='/img/mm.png' className='workImg'/></a>
          <br/>
          <b>Mission Measurement</b>
          <br/>
          <div>Product Manager<br/>(September 2018 - January 2019)</div>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href='https://tedxchicago.com'><img alt='' src='/img/ted.jpg' className='workImg'/></a>
          <br/>
          <b>TEDxChicago</b>
          <br/>
          <div>Speaker Coordinator<br/>(September 2017 - present)</div>
        </div>

        <div className='tagBottomLeft'>here i am</div>

        <div className='contentBottomLeft'>
          <b style={{fontSize:'1.2em'}}>heyo!</b>
          <img alt='' src='/img/bio.jpg' className='imgBottomLeft'/>
        </div>

        <div className='tagBottomRight'>contact</div>

        <div className='contentBottomRight'>
          <b style={{fontSize:'1.2em'}}>I like talkin to folks!</b>
          <br/><br/>
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ryanmchenry2/'>
            <img alt='' src='/img/linkedin.png' className='contactImg' />
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/ryanmchenry2/'>
            <img alt='' src='/img/git.png' className='contactImg' />
          </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/ryanmchenry2/'>
            <img alt='' src='/img/facebook.png' className='contactImg' />
          </a>
          <a href='mailto:ryanmchenry2@gmail.com'>
            <img alt='' src='/img/email.png' className='contactImg' />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
