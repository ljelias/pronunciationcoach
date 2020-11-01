import React, { Component } from 'react';
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
    return (<div className='coursesContainer'>
      <div className="row1Courses" id='coursesTop'>
        <h2 className="coursesRowTitle">PronunciationCoach Live Classes</h2>
        <div id='classesInfo'>
          <p className="courseP1"><span className='circle'></span> Interactive online group classes.</p>
          <p className="courseP1"><span className='circle'></span> Perfect for intermediate or advanced learners.</p>
          <p className="courseP1"><span className='circle'></span> Small classes (12-18 people) -- everyone can interact and get personal feedback.</p>
          <p className="courseP1"><span className='circle'></span> Each class is 50 minutes (by Zoom).</p>
          <p className="courseP2">In these classes you can...
            <ul className='classPoints'>
              <li>have fun talking with learners of English from other countries</li>
              <li>get valuable speaking practice</li>
              <li>gain confidence with your pronunciation</li>
              <li>and get personal feedback from the Coach</li>
            </ul>
            <span className='ulEndSpan'>...all at the same time!!</span></p>
          <p className="courseP1">Get a friend and sign-up together!!</p>
          <p className="courseP1">Class times are compatible with many time zones.</p>
          
          <button className='signUpBtn1'><a href='https://pronunciationcoachtraining.as.me/?template=class' target='_blank' rel='noopener noreferrer'>
          SEE CURRENT SCHEDULE</a></button>
          <p className="courseP1"><span className='arrowSpan'>&#8681;</span>&nbsp;Class descriptions below!</p>
        </div>

      </div>


      <div className="row2Courses">

        <div className="courseCard cardTopA">
          <a href='https://pronunciationcoachtraining.as.me/conversation-class1' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Conversation Class: fluency practice</h3></a>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 12 max</div></div>
          <p className='courseDetails'>Practice your speaking skills, improve your fluency, and have fun!</p>
          <p className='courseDetails'>Come ready to talk with classmates on guided topics in breakout groups, with the help of the instructor.</p>
          <p className='courseDetails'><em>NOTE: This class needs a minimum of 3 people. If only 1 or 2 people sign up, the class will be cancelled and your fee refunded.</em></p>
        </div>

        <div className="courseCard cardTopB">
          <a href='https://pronunciationcoachtraining.as.me/english-pronunciation1' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Master Class 1: Most Common Pronunciation Problems</h3></a>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 18 max</div></div>
          <p className='courseDetails'>The most common errors and pronunciation difficulties in English, important insights into the vowel system, and some of the most frequently used words that are most frequently mispronounced.</p>
          <p className='courseDetails'><em>As the initial class of the series, Master Class 1 has a discounted price!!</em></p>
        </div>

        <div className="courseCard cardTopC">
          <a href='https://pronunciationcoachtraining.as.me/english-vowel-system' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Master Class 2: English Vowel System</h3></a>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 18 max</div></div>
          <p className='courseDetails'>Vowel System Overview. The English vowel system is one of the more confusing aspects for most learners. The class includes: the 15 different vowel sounds, how the Long and Short vowel system works, Short-vowel pronunciation tips, and the most fundamental vowel spelling patterns.</p>
        </div>

        <div className="courseCard cardTopC">
          <a href='https://pronunciationcoachtraining.as.me/vowels-workout' target='_blank' rel='noopener noreferrer'>
            <h3 className='courseTitle'>Master Class 3: Most Challenging English Vowels Workout</h3></a>
          <div className='courseData'><div className='courseTime'>50 minutes</div><div className='classSize'>Size: 18 max</div></div>
          <p className='courseDetails'>Master the most challenging English vowels: Long-E vs. Short-i, Long-A vs. Short-e, Short-o vs. Short-u, Short-i, and the R-vowel. These vowels most frequently lead to communication mix-ups! You will have a chance to practice these and get personal feedback from the instructor.</p>
        </div>

      </div>


      <div className="row3Courses">
        <button className='signUpBtn2'><a href='https://pronunciationcoachtraining.as.me/?template=class' target='_blank' rel='noopener noreferrer'>
          SIGN UP NOW!</a></button>
        <p className='coursesQ'>Questions? Use the Contact form on the "About" page.</p>
      </div>
      <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Scroll to Top ^</div>

    </div>
    );
  }
}

export default Courses;