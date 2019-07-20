import React from 'react';
import './Splash.css';
import LineTo from 'react-lineto';

class Splash extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isMobile: this.props.isMobile,
      mouseX:0,
      mouseY:0,
    }
  }

  followMouse(e){
    this.setState({ mouseX: e.screenX, mouseY: e.screenY-112 });
  }

  renderCursorLine(){
    if (!this.props.isMobile){
      return(
        <span>
          <LineTo from="splashImg" to='splashMouse' borderColor='#e1e1e1' borderStyle='dashed' borderWidth={2} zIndex={-1}/>
        </span>
      )
    }
  }

  changeImgClear(){
    console.log('mouse enter')
      this.setState({img:'/me_clear.png'})
  }

  changeImgStandard(){
    console.log('mouse leave')
    this.setState({img:'/me.png'})
  }

  renderWeb(){
    return(
      <span>
        <div className='webText topLeft'>background</div>
        <div className='webText topRight'>projects</div>
        <div className='webText bottomLeft'>media</div>
        <div className='webText bottomRight'>contact</div>
        {this.renderCursorLine()}
      </span>
    )
  }

  render(){
    return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg' alt='me'/>
          <div className='splashBanner'> Ryan McHenry.</div>
          <div className='splashSubBanner'>software product manager</div>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
        </div>
    )
  }
}

export default Splash;
