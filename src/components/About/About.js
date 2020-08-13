import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import config from '../../config.js';


class About extends Component {
  state = {};

  handleSendData = (form, formData) => {

    let url = config.CONTACT_URL;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);

      let formElements = form.querySelector('.formElements');
      if (formElements) {
        formElements.style.display = 'none'; // hide form
      }
      let thankYouMessage = form.querySelector('.thankyouMessage');
      if (thankYouMessage) {
        thankYouMessage.style.display = 'block';
      }
      //event.target.reset();
      form.reset();
      setTimeout(() => { thankYouMessage.style.display = 'none'; }, 7000);
      setTimeout(() => { formElements.style.display = 'block'; }, 8500);
      return;
    };
    // url encode form data for sending as post data
    let encoded = Object.keys(formData).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(formData[k]);
    }).join('&');
    //console.log(encoded);
    xhr.send(encoded);
  }

  getFormValues = (event) => {
    event.preventDefault();
    let x = document.getElementById('subscribe').checked;
    let y = document.getElementById('analysis').checked;
    let z = document.getElementById('coaching').checked;

    if (x || y || z) {
      event.target.reset();
      return;
    }
    else {
      const form = event.target;
      const { name, email, message } = event.target;
      let formData = {
        name: name.value,
        email: email.value,
        message: message.value
      };
      let fields = Object.keys(formData);
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = 'responses'; // default sheet name
      formData.formGoogleSendEmail = ''; // no email by default

      this.handleSendData(form, formData);
    }
  }

  scrollToTopic = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop = () => {
    let elmnt = document.getElementById("aboutTop");
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount = () => {
    this.scrollToTop();
  }

  render() {
    return (<>
      <div id='aboutTop'>
        <nav className='pageScrollNav'>
          <span className='scrollDownLink' onClick={() => this.scrollToTop()}>The Coach</span>
          <span className='scrollDownLink' onClick={() => this.scrollToTopic('analysis')}>Analysis</span>
          <span className='scrollDownLink' onClick={() => this.scrollToTopic('classes')}>Classes</span>
          <span className='scrollDownLink' onClick={() => this.scrollToTopic('contact')}>Contact</span>
        </nav>
      </div>
      <div className="row1Contact">
        <div className="aboutCard">
          <h2 className='aboutTitle'>Laura Elias, MA / The Pronunciation Coach</h2>
          <p className="aboutP">Hello! Over the past 25+ years I have enjoyed working with many different
          students and I have had the amazing privilege of working with English learners from almost every
            non-English-speaking country!</p>
          <p className="aboutP">I have M.A. degrees from the University of Minnesota in Hispanic Linguistics and in Teaching
          English as a Second Language, and I have taught college-level ESL and
          Spanish at a variety of schools, including the University of Minnesota, Minneapolis College,
          Century College, and North Central University. This has given me the opportunity to work
          with students at all levels of language ability -- from complete beginners to highly advanced
            learners.</p>
          <p className="aboutP">I enjoy analyzing the pronunciation and spelling patterns of English, and
          I have been developing my own approach to teaching pronunciation in order to make it more straightforward
            for students to learn and understand.</p>
        </div>
      </div>

      <div className="row2Contact" id='analysis'>
        <div className="aboutCard2">
          <div className="cardTop">
            <h2 className='aboutTitle inlineB'>Pronunciation Analysis</h2>
            <p className="aboutP inlineB">A diagnostic analysis of your pronunciation!</p>
          </div>

          <div className="rowAboutCard">

            <div className="analysisCardLeft">
              <p className="aboutP4 bold">The Process:</p>
              <ul className='myUlList3'>
                <li className='analysisProcess'>1) Record your voice on my special analysis website</li>
                <li className='analysisProcess'>2) I listen and send the results to you within a few days</li>
                <li className='analysisProcess'>3) We meet to talk about the results and answer your questions</li>
              </ul>
              <div className="rowAboutCard">
                <div className="analysisSubRow">
                  <p className="aboutP4 bold">I will listen to your recordings to discover...</p>
                  <ul className='myUlList2'>
                    <li className="aboutP5">Your overall strengths and weaknesses with spoken English.</li>
                    <li className="aboutP5">Which features of your accent are the most problematic and most likely to
                      cause misunderstandings or miscommunication.</li>
                    <li className="aboutP5">Which problem areas are the most crucial for you to improve first.</li>
                  </ul>
                </div>
                <div className="analysisSubRow">
                  <p className="aboutP4 bold">Then I will send you...</p>
                  <ul className='myUlList2'>
                    <li className="aboutP5">Written feedback (3 to 4 pages) with examples and explanations of your top
                      priorities for improvement.</li>
                    <li className="aboutP5">An audio file (mp3) in which I explain your results and record examples.</li>
                    <li className="aboutP5">Copies of your audio recordings (mp3).</li>
                    <li className="aboutP5">Suggestions or exercises for how you can practice and improve.</li>
                  </ul>
                </div>
              </div>
              <p className="aboutP3">After you receive your results, we can schedule a meeting to
                discuss the results and answer your questions!</p>
            </div>

            <div className="analysisCardRight">
              <p className='analysis1 centered'>The analysis covers all of these aspects of pronunciation:</p>
              <p className="analysis2 centered">Consonants</p>
              <p className="analysis2 centered">Consonant clusters</p>
              <p className="analysis2 centered">Vowels</p>
              <p className="analysis2 centered">Syllables</p>
              <p className="analysis2 centered">Word Stress</p>
              <p className="analysis2 centered">Sentence Stress (rhythm)</p>
              <p className="analysis2 centered">Word endings</p>
              <p className="analysis2 centered">Reductions</p>
              <p className="analysis2 centered">Intonation and sentence focus</p>
              <p className="analysis2 centered">Phrasal Linking (liasons)</p>
            </div>
          </div>

          <div className="rowAboutCard paddedRow">
            <p className="aboutP4 bold">To begin the analysis process...</p>
            <ol className='myUlList2'>
              <li className="aboutP4">Fill in <a href='https://forms.gle/hK5vUt61udEHTzrX7' target='_blank' rel='noopener noreferrer'
                className='shadowA'>my&nbsp;form</a>
                with information about yourself, your language background, and your experience with English.</li>
              <li className="aboutP5">I send you an email with instructions and a link to my analysis recording site.
              </li>
              <li className="aboutP5">Record your voice on my analysis site. It has instructions and simple topics provided for recording.</li>
              <li className="aboutP5">When I receive your recordings, I will complete the analysis within 4 to 5 business days, then 
                send you an overview summary and a PayPal email invoice ($190 US).</li>
              <li className="aboutP5">Get your full results! When I receive the payment I will send your full detailed analysis
                results.</li>
              <li className="aboutP4">Conference. When you are ready, we can plan a time to talk (skype, google hangouts...)!
              </li>
            </ol>
            <p className="aboutP3"><span className='bold'>QUESTIONS? </span>Use the form below to contact me!</p>
          </div>

        </div>
      </div>


      <div className="row3Contact" id='classes'>

        <div id='coachingCard'>
          <h2 className='aboutTitle'>Live English Classes!</h2>
          <p className="aboutP">Online group classes with the Coach. Each class is 50 minutes, full of information, and interactive. Class times are compatible with many different time zones, and affordable. Sign-up with a friend!!</p>
          <p className="aboutP">The schedule is updated weekly.</p>
          <button className='signUpBtn1'><Link to='//pronunciationcoachtraining.as.me/?template=class' target='_blank' rel='noopener noreferrer'>
          SEE CURRENT SCHEDULE</Link></button>


          <hr className='lightHr' />

          <div className="aboutP" id='classList'>CURRENT CLASSES <em>(more to come!)</em>
            <ul className='coachingList'>
              <li className='coachingListItem'><strong>Conversation Class:</strong> Fluency practice with classmates in breakout groups, on guided topics, with the help of the Coach.</li>
              <li className='coachingListItem'><strong>Master Class&nbsp;1:</strong> English Pronunciation Basics: The most common pronunciation difficulties overall.</li>
              <li className='coachingListItem'><strong>Master Class&nbsp;2:</strong> Overview of the Vowel System: the system underlying the 15 different vowel sounds and basic spelling-pronunciation patterns.</li>
            </ul>
          </div>
        </div>

        <div id='contact'>
          <h2 className="aboutTitle">Contact the Coach</h2>
          <p>Use this form for general questions or to learn more about my services!</p>
          <p><em>Don't worry! You email address will NOT be added to any list!</em></p>
          <form className="gform" onSubmit={e => { this.getFormValues(e) }}>
            <div className="formElements">
              <button type='submit' className='contactButton'>Send</button>

              <fieldset id="checkbox">
                <label htmlFor="subscribe" className="contactLabel">Subscribe: </label>
                <input type="checkbox" id="subscribe" name='subscribe' />
                <label htmlFor="analysis" className="contactLabel">Analysis: </label>
                <input type="checkbox" id="analysis" name='analysis' />
                <label htmlFor="coaching" className="contactLabel">Coaching: </label>
                <input type="checkbox" id="coaching" name='coaching' />
              </fieldset>

              <fieldset>
                <label htmlFor="name" className='contactLabel'>Name: </label>
                <input className='contactInput' id="name" name="name" placeholder="Your name" required />
              </fieldset>

              <fieldset>
                <label htmlFor="email" className='contactLabel'>Email:</label>
                <input className='contactInput' id="email" name="email" type="email" required
                  placeholder="your.name@email.com" />
              </fieldset>

              <fieldset>
                <label htmlFor="message" className='contactLabel'>Message: </label>
                <textarea id="message" name="message" rows="6" required
                  placeholder="Enter your message here..."></textarea>
              </fieldset>

            </div>

            <div className="thankyouMessage">
              <h5>Thanks for contacting us!<br />
                  We will get back to you soon!</h5>
            </div>
          </form>
        </div>

      </div>
      <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Scroll to Top ^</div>

    </>);
  }
}

export default About;

