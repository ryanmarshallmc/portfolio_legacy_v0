import React, { Component } from 'react';
import Landing from './pages/Landing';
import Who from './pages/Who';
import What from './pages/What';
import Where from './pages/Where';
import Footer from './pages/Footer';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='nav_container'>
          <div className='nav_text_primary' onClick={()=>scrollToComponent(this.Landing, { offset: 0, align: 'top', duration: 500})}>
            ryan mchenry.
          </div>

          <div className='nav_link' onClick={()=>scrollToComponent(this.Who, { offset: 0, align: 'top', duration: 500})}>
            who i am
          </div>

          <div className='nav_link' onClick={()=>scrollToComponent(this.What, { offset: 0, align: 'top', duration: 500})}>
            what i do
          </div>

          <div className='nav_link' onClick={()=>scrollToComponent(this.Where, { offset: 0, align: 'top', duration: 500})}>
            where to find me
          </div>

        </div>

        <Landing ref={(r) => { this.Landing = r; }}/>
        <Who ref={(r) => { this.Who = r; }}/>
        <What ref={(r) => { this.What = r; }}/>
        <Where ref={(r) => { this.Where = r; }}/>
        <Footer />
      </div>
    );
  }
}

export default App;
