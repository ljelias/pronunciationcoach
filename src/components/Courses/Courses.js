import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';


class Courses extends Component {
  state = {};


  scrollToTop = () => {
    let elmnt = document.getElementById("coursesTop");
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }


  componentDidMount() {
    this.scrollToTop();
  }

  render() {
    return (<>
      <div className="row1Courses" id='coursesTop'>
        <h2 className="coursesRowTitle">PronunciationCoach Classes</h2>
        <div id='classesInfo'>
          <p className="courseP1">Interactive online group classes. Each class is 50 minutes (via Zoom), and limited in size (12-18 people) so that everyone can interact and also get the personal feedback they need.</p>
          <p className="courseP1">In these classes you can...
            <ul className='classPoints'>
              <li>interact with learners of English from other countries</li>
              <li>have some fun speaking practice</li>
              <li>learn how to improve your pronunciation</li>
              <li>and get personal feedback from the Coach</li>
            </ul>
            <span className='ulEndSpan'>...all at the same time!!</span></p>
          <p className="courseP1">The classes are very affordable, to make it easy to attend several sessions!
          <br />Get a friend and sign-up together!!</p>
          <p className="courseP1">Class times are set up to be compatible with a range of time zones, and the schedule is updated weekly.
          <br />See current times available: <Link to='//pronunciationcoachtraining.as.me' target='_blank' rel='noopener noreferrer'
              className='shadowA'>REGISTRATION PAGE</Link> </p>

          <p className="aboutP"></p>

        </div>

      </div>


      <div className="row2Courses">

        <div className="courseCard cardTopA">
          <Link to='//pronunciationcoachtraining.as.me/conversation-class' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Conversation Class: fluency practice</h3></Link>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 12 max</div></div>
          <p className='courseDetails'>Practice your speaking skills, improve your fluency, and have fun!</p>
          <p className='courseDetails'>Come ready to talk with classmates on guided topics in breakout groups, with the help of the instructor.</p>
          <p className='courseDetails'><em>NOTE: This class needs a minimum of 3 people. If only 1 or 2 people sign up, the class will be cancelled and your fee refunded.</em></p>
        </div>

        <div className="courseCard cardTopB">
          <Link to='//pronunciationcoachtraining.as.me/english-pron-basics' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Master Class 1: English Pronunciation Basics</h3></Link>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 18 max</div></div>
          <p className='courseDetails'>English Pronunciation Intro, including: the most common pronunciation difficulties, some important insights into the vowel system, and a look at the most frequently used words that are most frequently mispronounced.</p>
          <p className='courseDetails'><em>As the initial class of the series, it has a discounted price!!</em></p>
        </div>

        <div className="courseCard cardTopC">
          <Link to='//pronunciationcoachtraining.as.me/english-vowel-system' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Master Class 2: English Vowel System</h3></Link>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 18 max</div></div>
          <p className='courseDetails'>Vowel System Overview. The English vowel system is one of the more confusing aspects for most learners. The class includes: the 15 different vowel sounds, how the Long and Short vowel system works, special Short-vowel pronunciation tips, some fundamental vowel spelling patterns, and the most commonly confused vowel contrasts.</p>
        </div>

      </div>


      <div className="row3Courses">
        <button className='signUpBtn'><Link to='//pronunciationcoachtraining.as.me' target='_blank' rel='noopener noreferrer'>
          SIGN UP NOW!</Link></button>
        <h2 className="coursesRowTitle">...</h2>
        <p>Questions? Use the Contact form on the "About" page.</p>
      </div>
      <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Scroll to Top ^</div>

    </>
    );
  }
}

export default Courses;