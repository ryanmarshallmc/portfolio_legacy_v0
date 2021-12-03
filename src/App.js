import React from 'react';
import './App.css';
import LineTo from 'react-lineto';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: "Scott M. McHenry",
      isMobile: window.innerWidth < 800 ? true : false,
      mouseX:0,
      mouseY:0,
      view: 'splash',
      photo: null
    }
  }

  followMouse(e){
    this.setState({ mouseX: e.screenX, mouseY: e.screenY - 110 });
  }

  renderCursorLine(){
    if (!this.state.isMobile){
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

  setView(view){
    let left=['background','media']
    let right=['projects','contact']
    if (left.includes(this.state.view) && !left.includes(view)){
      this.setState({view:'leftToRight'})
      window.setTimeout(() => {
        this.setState({view:view})
      }, 500);
    }
    else if (right.includes(this.state.view) && !right.includes(view)){
      this.setState({view:'rightToLeft'})
      window.setTimeout(() => {
        this.setState({view:view})
      }, 500);
    }
    else {
      this.setState({view:view})
    }
  }

  renderWeb(){
    return(
      <span>
        <div className='webText topLeft' style={this.state.view === 'background' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('background')}>Background</div>
        <div className='webText topRight' style={this.state.view === 'projects' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('projects')}>Projects</div>
        <div className='webText bottomLeft' style={this.state.view === 'media' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('media')}>Media</div>
        <div className='webText bottomRight' style={this.state.view === 'contact' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('contact')}>Contact</div>
        {this.renderCursorLine()}
      </span>
    )
  }

  renderBackground(){
    return(
      <div className='leftBody'>
        <b>My name is Scott M. McHenry.</b>
        <br style={{lineHeight:'2.4'}}/>
        I'm a Vice President of Software Engineering for <a href='https://www.jpmorganchase.com/' target='_blank' rel="noopener noreferrer">JPMorgan Chase</a> based in Newark, DE.
        <br style={{lineHeight:'2.4'}}/>
        <br style={{lineHeight:'2.4'}}/>
        I'm a graduate of both Case Western Reserve University (2014, B.S. Computer Engineering) and Drexel University (2018, M.S. Software Engineering).
        <br style={{lineHeight:'2.4'}}/>
        <br style={{lineHeight:'2.4'}}/>
        More on me <a href='/mchenry-scott-resume.pdf' target='_blank' rel="noopener noreferrer">here</a>.
      </div>
    )
  }

  renderProjects(){
    return(
      <div className='rightBody'>
        <b><a href='https://apps.apple.com/us/app/fms-calculator/id1031676371' target='_blank' rel="noopener noreferrer">FMS Calculator</a></b>
        <br/>
        A cross-platform mobile application I originally created during my time working for the US Navy.  This mobile app calculates an enlisted US Sailor's projected Final Multiple Scores (FMS), which determines their eligibility for advancement to higher pay grades during their service.
        <br style={{lineHeight:'2.4'}}/>
        <br style={{lineHeight:'2.4'}}/>
        <b><a href='https://www.public.navy.mil/navwar/peomlb/Documents/SWP/FS_NJIS.pdf' target='_blank' rel="noopener noreferrer">NJIS</a></b>
        <br/>
        The Naval Justice Information System (NJIS) is a Web-based system that provides access to 50,000 Navy and Marine Corps users worldwide and serves as the Department of the Navy’s (DON) end-to-end criminal justice case management system.
        <br style={{lineHeight:'2.4'}}/>
      </div>
    )
  }

  renderMedia(){
    if (!this.state.photo){
      return(
        <div className='leftBody'>
          <img className='mediaImg' src='/media_1.jpg' alt='me' onClick={()=>this.setState({photo:'/media_1.jpg'})}/>
          <img className='mediaImg' src='/media_2.jpg' alt='me' onClick={()=>this.setState({photo:'/media_2.jpg'})}/>
          <img className='mediaImg' src='/media_3.jpg' alt='me' onClick={()=>this.setState({photo:'/media_3.jpg'})}/>
          <img className='mediaImg' src='/media_4.jpg' alt='me' onClick={()=>this.setState({photo:'/media_4.jpg'})}/>
        </div>
      )
    }
    else{
      return(
        <div className='mediaImgContainer' onClick={()=>this.setState({photo: null})}>
          <img className='mediaImgFull' alt='me' src={this.state.photo}/>
          <div className='mediaImgClose' onClick={()=>this.setState({photo: null})}>close</div>
        </div>
      )
    }
    
  }

  renderContact(){
    return(
      <div className='rightBody'>
        <b>Here are my social media profiles and my email:</b>
        <br style={{lineHeight:'2.4'}}/>
        <a href='https://github.com/scottmc500' target='_blank' rel="noopener noreferrer">GitHub</a>: @scottmc500
        <br style={{lineHeight:'2.4'}}/>
        <a href='https://linkedin.com/in/scottmmchenry' target='_blank' rel="noopener noreferrer">LinkedIn</a>: @scottmmchenry
        <br style={{lineHeight:'2.4'}}/>
        <a href='mailto:smchenry2014@gmail.com'>Gmail</a>: smchenry2014@gmail.com
        <br style={{lineHeight:'2.4'}}/>
        I am always new software projects and challenges, so feel free to reach out with anything interesting.
      </div>
    )
  }

  printMessage(e) {
    console.log(e);
    fetch("/helloworld")
     .then(resp => resp.text())
     .then(text => console.log(text));
  }

  render(){
    if (this.state.view === 'splash'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
            <img  src='/me.png' className='splashImg splashImgColor' alt='me' onClick={()=>this.setView('splash')}/>
            <div className='splashBanner'> Scott M. McHenry</div>
            <div className='splashSubBanner' onClick={this.printMessage.bind(this)}>Software Engineer</div>
            <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
            {this.renderWeb()}
          </div>
      )
    }
    if (this.state.view === 'background'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg moveRight' alt='me' onClick={()=>this.setView('splash')}/>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
          {this.renderBackground()}
        </div>
      )
    }
    if (this.state.view === 'media'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg moveRight' alt='me' onClick={()=>this.setView('splash')}/>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
          {this.renderMedia()}
        </div>
      )
    }
    if (this.state.view === 'projects'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg moveLeft' alt='me' onClick={()=>this.setView('splash')}/>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
          {this.renderProjects()}
        </div>
      )
    }
    if (this.state.view === 'contact'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg moveLeft' alt='me' onClick={()=>this.setView('splash')}/>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
          {this.renderContact()}
        </div>
      )
    }
    if (this.state.view === 'leftToRight'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg leftToRight' alt='me' onClick={()=>this.setView('splash')}/>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
        </div>
      )
    }
    if (this.state.view === 'rightToLeft'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
          <img  src='/me.png' className='splashImg rightToLeft' alt='me' onClick={()=>this.setView('splash')}/>
          <div className='splashMouse' style={{top:this.state.mouseY,left:this.state.mouseX}}></div>
          {this.renderWeb()}
        </div>
      )
    }
  }
}

export default App;
