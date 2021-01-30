import React from 'react';
import './App.css';
import LineTo from 'react-lineto';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isMobile: window.innerWidth < 800 ? true : false,
      mouseX:0,
      mouseY:0,
      view: 'splash',
      photo: null
    }
  }

  followMouse(e){
    this.setState({ mouseX: e.screenX, mouseY: e.screenY-112 });
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
        <div className='webText topLeft' style={this.state.view === 'background' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('background')}>background</div>
        <div className='webText topRight' style={this.state.view === 'projects' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('projects')}>projects</div>
        <div className='webText bottomLeft' style={this.state.view === 'media' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('media')}>media</div>
        <div className='webText bottomRight' style={this.state.view === 'contact' ? {fontWeight: '700', color:'#4285F4'} : null} onClick={()=>this.setView('contact')}>contact</div>
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
        I'm a graduate of both Case Western Reserve University (2014, B.S. Computer Engineering) and Drexel University (2018, M.S. Software Engineering).
        <br style={{lineHeight:'2.4'}}/>
        As a researcher, I've worked with Northwestern's&nbsp;
        <a href='https://tidal.northwestern.edu/' target='_blank' rel="noopener noreferrer">TIDAL Lab</a>&nbsp;
        and <a href='http://music.cs.northwestern.edu/' target='_blank' rel="noopener noreferrer">Interactive Audio Lab</a>.
        <br style={{lineHeight:'2.4'}}/>
        I love all things UI/UX, Ed-Tech, and cooperative. As someone who came to CS&nbsp;
        late in the game, I want to help demystify what it means to be a "coder".
        <br style={{lineHeight:'2.4'}}/>
        More on me <a href='/resume.pdf' target='_blank' rel="noopener noreferrer">here</a>.
      </div>
    )
  }

  renderProjects(){
    return(
      <div className='rightBody'>
        <b><a href='https://apps.apple.com/us/app/fms-calculator/id1031676371' target='_blank' rel="noopener noreferrer">FMS Calculator</a></b>
        <br/>
        A cross-platform mobile application I originally created during my time working for the US Navy.  This mobile app calculates an enlistd US Sailor's projected Final Multiple Scores (FMS), which determines their eligibility for advancement to higher pay grades during their service.
        <br style={{lineHeight:'2.4'}}/>
        <b><a href='http://accompani.io' target='_blank' rel="noopener noreferrer">Accompani</a></b>
        <br/>
        A machine-learning powered harmonizer and lead-sheet generator. Trained on over 3,000 lead sheets and customizable by genre, chord frequency, and key signature.
        <br style={{lineHeight:'2.4'}}/>
        <b><a href='http://predictivepolitics.xyz' target='_blank' rel="noopener noreferrer">Predictive Politics</a></b>
        <br/>
        An election prediction application built on twitter scraping, with modular, scalable source data and real time model construction.
        <br style={{lineHeight:'2.4'}}/>
      </div>
    )
  }

  renderMedia(){
    if (!this.state.photo){
      return(
        <div className='leftBody'>
          <img className='mediaImg' src='/media_1.jpg' onClick={()=>this.setState({photo:'/media_1.jpg'})}/>
          <img className='mediaImg' src='/media_2.jpg' onClick={()=>this.setState({photo:'/media_2.jpg'})}/>
          <img className='mediaImg' src='/media_3.jpg' onClick={()=>this.setState({photo:'/media_3.jpg'})}/>
          <img className='mediaImg' src='/media_4.jpg' onClick={()=>this.setState({photo:'/media_4.jpg'})}/>
        </div>
      )
    }
    else{
      return(
        <div className='mediaImgContainer' onClick={()=>this.setState({photo: null})}>
          <img className='mediaImgFull' src={this.state.photo}/>
          <div className='mediaImgClose' onClick={()=>this.setState({photo: null})}>close</div>
        </div>
      )
    }
    
  }

  renderContact(){
    return(
      <div className='rightBody'>
        <b>Here are all of my social media handles, in case you need to contact me:</b>
        <br style={{lineHeight:'2.4'}}/>
        <a href='https://github.com/scottmc500' target='_blank' rel="noopener noreferrer">GitHub</a>: @scottmc500
        <br style={{lineHeight:'2.4'}}/>
        <a href='https://linkedin.com/in/scottmmchenry' target='_blank' rel="noopener noreferrer">LinkedIn</a>: @scottmmchenry
        <br style={{lineHeight:'2.4'}}/>
        <a href='https://www.facebook.com/smchenry2014' target='_blank' rel="noopener noreferrer">Facebook</a>: Scott McHenry
        <br style={{lineHeight:'2.4'}}/>
        <a href='mailto:smchenry2014@gmail.com'>Gmail</a>: smchenry2014@gmail.com
        <br style={{lineHeight:'2.4'}}/>
        I always love to hear about projects, opportunities, and crazy-wild-aspiration-dreams that will likely never come to fruition but are still fun to talk about.
      </div>
    )
  }

  render(){
    if (this.state.view === 'splash'){
      return(
        <div className="splashContainer" onMouseMove={this.followMouse.bind(this)}>
            <img  src='/me.png' className='splashImg splashImgColor' alt='me' onClick={()=>this.setView('splash')}/>
            <div className='splashBanner'> Scott M. McHenry</div>
            <div className='splashSubBanner'>Software Engineer</div>
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
