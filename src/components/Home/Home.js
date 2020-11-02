import React, { Component } from 'react';
import './Home.css';
import BiogInfo from '../Start/BiogInfo.js';
import StartHere from '../Start/StartHere.js';
import TopTen from '../Start/TopTen.js';
import MoreResources from '../Start/MoreResources.js';
import Faqs from '../Start/Faqs.js';

class Home extends Component {

  state = {
    currentOption: 'StartHere',
    menuLightUp: 'menuOption1'
  };


  scrollToTop = () => {
    document.getElementById("homeTop").scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTopTips = () => {
    document.getElementById("topTenTop").scrollIntoView({ behavior: 'smooth' });
  }

  turnOffMenuLight(oldLightUp) {
    document.getElementById(oldLightUp).setAttribute('style', 'color: rgba(60, 60, 60, 0.9); backgroud-color: transparent; box-shadow: none;')
  }

  turnOnMenuLight(newLightUp) {
    document.getElementById(newLightUp).setAttribute('style', 'color:whitesmoke; background: radial-gradient(rgba(110, 223, 35, 0.8), rgba(137, 255, 58, 0.9)); box-shadow: 0px 2px 12px 8px rgba(210, 232, 250, 0.4), 0px 4px 18px 10px rgba(255, 255, 255, 0.9);');
  }

  setCurrentOption(newOption, newLightUp) {
    let oldLightUp = this.state.menuLightUp;
    this.setState({ currentOption: newOption, menuLightUp: newLightUp }, this.turnOffMenuLight(oldLightUp));
    this.turnOnMenuLight(newLightUp);
  }

  componentDidMount() {
    let startingMenuId = this.state.menuLightUp;
    this.turnOnMenuLight(startingMenuId);
  }


  render() {
    const componentName = this.state.currentOption;
    let currentHomeComponent;
    switch (componentName) {
      case 'StartHere':
        currentHomeComponent = <StartHere />;
        break;
      case 'MoreResources':
        currentHomeComponent = <MoreResources />;
        break;
      case 'Faqs':
        currentHomeComponent = <Faqs />;
        break;
      case 'BiogInfo':
        currentHomeComponent = <BiogInfo />;
        break;
      case 'TopTen':
        currentHomeComponent = <TopTen />;
        break;
      default:
        console.log(`no component name in state`);
    }

    return (<>
      <div id='homeTop'>
        <nav id="startMenuRow">
          <div className="startMenuOption" id="menuOption1" onClick={() => {this.setCurrentOption('StartHere', 'menuOption1'); this.scrollToTop();}}>START HERE</div>
          <div className="startMenuOption" id="menuOption2" onClick={() => this.setCurrentOption('MoreResources', 'menuOption2')}>MORE HELP</div>
          <div className="startMenuOption" id="menuOption3" onClick={() => {this.setCurrentOption('Faqs', 'menuOption3'); this.scrollToTop();}}>FAQs</div>
          <div className="startMenuOption" id="menuOption4" onClick={() => this.setCurrentOption('BiogInfo', 'menuOption4')}>ABOUT</div>
          <div className="startMenuOption" id="menuOption5" ><em>(more soon!)</em></div>
        </nav>
        {currentHomeComponent}
      </div>

    </>);
  }
}

export default Home;