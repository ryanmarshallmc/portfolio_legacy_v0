import React, { Component } from 'react';
import Banner from '../components/Banner';

class Landing extends Component {
  render() {
    return (
      <div>
        <Banner title='ryan mchenry'img='/img/headshot.jpg'/>
        <div className='landing-content'>
          <div className='landing-content-header'>hi.</div>
          <div className='landing-content-body-line'>
            my name is ryan mchenry, and i'm a developer focused on software for social impact.
          </div>

          <div className='landing-content-body-line'>
            i’m excited by work in the world of startups, and aspiring to lead change in the non-profit sector.
          </div>

          <div className='landing-content-body-line'>
            read on for more on my background, my expertise, and what i'm working on now.
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
