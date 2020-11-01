import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import TopTen from './TopTen.js';
import './StartHere.css';


class StartHere extends Component {
  state = {};

  scrollToTopTips = () => {
    document.getElementById("topTenTop").scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop = () => {
    let elmnt = document.getElementById("startHereTop");
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount = () => {
    this.scrollToTop();
  }

  render() {
    return (<>
      <section id="startHereTop">
        <div id="startHereRow1">
          <div className="startHereCard">
            <div className="startHereCardHeader topicColorA"><h3 className="startHereTopicTitle">STEP 1: VOWEL&nbsp;CHECKUP</h3></div>
            <div className="startHereCardBottom">
              <p className="startHereP">The English vowel system is complex, and many English learners need to correct the way they pronounce at least a few of the vowels.</p>
              <p className="startHereP"><em>CHECK YOURSELF: </em>The <Link to='/vowelcheck' className='shadowA'>Vowel&nbsp;Check</Link> page covers vowel contrasts that are most often difficult for learners.</p>
              <p className="startHereP">Listen to the quizzes to assess yourself. Can you hear the differences between the vowels? You may discover some areas of weakness. </p>
              <p className="startHereP">The training exercises let you listen to the word pairs from the quizzes, to help you train your ear.</p>
            </div>
          </div>
        <div className="startHereCard">
          <div className="startHereCardHeader topicColorB"><h3 className="startHereTopicTitle">NEXT: CHECK VOWEL&nbsp;"O"</h3></div>
          <div className="startHereCardBottom">
            <p className="startHereP">The vowel that is probably mispronounced most often is "O", 
              so this is one of the first things to check.</p>          
            <p className="startHereP">Many students do not know that English “O” has three different sounds, so they
              use just one O&#8209;sound (with rounded lips) every time they see this letter in English.</p>          
            <p className="startHereP"><em>BUT WAIT!!</em> Besides the three basic sounds, there is also a fourth sound  
              used in some frequently used words!</p>          
            <p className="startHereP">Do you know all the sounds of "O"? Find out in the blog lesson <a
                href='https://pronunciationcoach.blog/2012/10/25/the-sounds-of-o/' target='_blank' rel='noopener noreferrer'
                className='shadowA'><em>"The&nbsp;Sounds&nbsp;of&nbsp;O"</em></a>.</p>          
          </div>
        </div>
        <div className="startHereCard">
          <div className="startHereCardHeader topicColorC"><h3 className="startHereTopicTitle">TOP TEN TIPS!!</h3></div>
          <div className="startHereCardBottom">
            <p className="startHereP">Some pronunciation difficulties are related to patterns from your first language, but these 
              10 tips can help almost anybody, no matter what your first language is.​</p>          
            <p className="startHereP"><em>CONSIDER...</em> Are there best ways to practice pronunciation?  
              Do all dictionaries use the same symbols?​ Are facial movements related to pronunciation?</p>          
          </div>
          <div className="startHereCardBottom2">
            <div id='goToTips' onClick={() => this.scrollToTopTips()}>
              <p className="goToP">Go to</p>
              <p className="goToP">TOP TEN TIPS!!</p>
              <p id='scrollDownArrow'>&#8681;</p>
            </div>
          </div>
        </div>
        </div>
        <TopTen />
        <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Go to Top ^</div>

      </section>


    </>);
  }
}

export default StartHere;
