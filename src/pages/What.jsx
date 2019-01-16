import React, { Component } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

class What extends Component {
  render() {
    return (
      <div>
        <Banner title='what:' subtitle='projects, organizations, so forth.' img='/img/what.jpg'/>
        <div className='card-container'>
          <Card
            img='/img/mm.png'
            link='http://missionmeasurement.com'
            title='mission measurement'
            role='lead software developer'
            line1='(september 2018 - present)' />
          <Card
            img='/img/blpt.png'
            link='https://blpt.co'
            title='blueprint alpha'
            role='software engineer'
            line1='(january - september 2018)' />
          <Card
            img='/img/ned.png'
            link='http://pvrl.co'
            title='NED technologies'
            role='co-founder'
            line1='(june 2018 - present)' />
          <Card
            img='/img/ted.jpg'
            link='https://tedxnorthwesternu.com'
            title='TEDx'
            role='TEDxNorthwesternU'
            line1='executive director (2018)'
            line2='TEDxChicago'
            line3='speaker coordinator (2018)'/>
      </div>
    </div>
    );
  }
}

export default What;
