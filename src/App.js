import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {

    let who="I'm a developer and product manager living in Chicago, IL. I'm graduating from Northwestern University in the Class of 2019 with a double major in Computer Science and Music Engineering."

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
          <div className='textBottomLeft'>Heyo!</div>
          <br/>
          <img src='/img/headshot.jpg' className='imgBottomLeft'/>
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
