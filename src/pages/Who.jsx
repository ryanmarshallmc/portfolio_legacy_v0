import React, { Component } from 'react';
import Banner from '../components/Banner';

class Who extends Component {
  render() {
    return (
      <div>
        <Banner title='who:' subtitle='bio, background, etc.' img='/img/who.jpg'/>
        <div className='who-content'>
          <img className='who-img' src='/img/bio.jpg' />
          <div className='who-text-block'>
            I’m currently a senior at Northwestern University pursuing majors in Computer Science and Music Engineering. I’m currently leading the software team at Mission Measurement to develop the first full-scale analytics platform for the non-profit sector.
            <br /><br />
            During my time at Northwestern, I’ve curated and directed TEDxNorthwesternU, co-founded a startup in the VR/AR space, played in all four major music ensembles, engineered and produced for Bienen Recording Studios, served as an Ambassador for the Buffett Institute of Global Studies, coordinated philanthropy for the Phi Delta Theta fraternity, and played on the water polo team as well.
            <br /><br />
            I believe that software can does not have to be built for its own sake.  With thoughtful intention and a well defined purpose, new technology can vastly better the world we live in, and I hope to work towards that goal with each new line of code.
            <br /><br />
            Photo: © Cassie Majewski, 2018
          </div>
        </div>
      </div>
    );
  }
}

export default Who;
