import React, { Component } from 'react';
import './About.css';
import config from '../../config.js';


class About extends Component {
  state = {  };

  handleSendData = (form, formData) => {

    let url = config.CONTACT_URL;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
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
      setTimeout(() => {thankYouMessage.style.display = 'none';}, 7000);
      setTimeout(() => {formElements.style.display = 'block';}, 8500);
      return;
    };
    // url encode form data for sending as post data
    let encoded = Object.keys(formData).map(function(k) {
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

  scrollToTop = () => {
      let elmnt = document.getElementById("aboutTop");
      elmnt.scrollIntoView({behavior: 'smooth' });
  }

  componentDidMount = () => {
    window.scrollTo(0,0);
  }

  render() { 
    return ( <>
      <div className="row1Contact" id='aboutTop'>
        <div className="aboutCard">
          <h2 className='aboutTitle'>Laura Elias, MA / The Pronunciation Coach</h2>
          <p className="aboutP">Hello! Over the past 25+ years I have enjoyed working with so many different
            students and I have had the amazing privelege of working with English learners from almost every
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

      <div className="row2Contact">
        <div className="aboutCard2">
          <div className="cardTop">
            <h2 className='aboutTitle inlineB'>Pronunciation Analysis</h2>
            <p className="aboutP inlineB">A diagnostic analysis of your pronunciation!</p>
          </div>

          <div className="rowAboutCard">

            <div className="analysisCardLeft">
              <p className="aboutP3">The Process: 1) Record your voice on my analysis website, 2) I listen and
                return the results to you by email, 3) We meet to talk about the results and answer your questions.</p>
              <div className="rowAboutCard">
                <div className="analysisSubRow">
                  <p className="aboutP4">I will listen to your recordings to discover...</p>
                  <ul className='myUlList2'>
                    <li className="aboutP5">Your overall strengths and weaknesses with spoken English.</li>
                    <li className="aboutP5">Which features of your accent are the most problematic and most likely to
                      cause misunderstandings or miscommunication.</li>
                    <li className="aboutP5">Which problem areas are the most crucial for you to improve first.</li>
                  </ul>
                </div>
                <div className="analysisSubRow">
                  <p className="aboutP4">Then I will send you...</p>
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
              <p className='analysis1 centered'>The analysis covers these aspects of pronunciation:</p>
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
            <p className="aboutP4">To begin the analysis process...</p>
            <ol className='myUlList2'>
              <li className="aboutP4">Fill in <a href='https://forms.gle/hK5vUt61udEHTzrX7' target='_blank' rel='noopener noreferrer'
                  className='shadowA'>my&nbsp;form</a>
                with information about yourself, your language background, and your experience with English.</li>
              <li className="aboutP5">I will send you an email with instructions and a link to the analysis recording site.
              </li>
              <li className="aboutP5">Record your voice. The analysis site has instructions and 4 topics to discuss.</li>
              <li className="aboutP5">When I receive your recordings, I will complete the analysis within 4 to 5 days, and
                send you a preliminary summary with a PayPal email invoice ($140 US) for the payment.</li>
              <li className="aboutP5">Watch for your full results! When I receive the payment I will send your full analysis
                results to you.</li>
              <li className="aboutP4">Conference. When you are ready, we can plan a time to talk (skype, google hangouts...)!
              </li>
            </ol>
            <p className="aboutP3">Questions? Use the form below to contact me!</p>
          </div>

        </div>
        <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Scroll to Top ^</div>
      </div>


      <div className="row3Contact">

        <div className="columnAContact">
          <h2 className='aboutTitle'>Pronunciation Coaching</h2>
          <div className="aboutP">
            <ul className='myUlList2'>
              <li>One-on-one or group lessons by video.</li>
            </ul>
            <ul className='myUlList2'>
              <li>30-minute session ($35 US) or 45-minute session ($50 US).</li>
            </ul>
            <ul className='myUlList2'>
              <li>Use the form to contact me!</li>
            </ul>
          </div>
        </div>

        <div className="columnBContact">
          <div id='contact'>
            <h2 className="aboutTitle">Contact the Coach!</h2>
            <form className="gform" onSubmit = {e => {this.getFormValues(e)}}>
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

      </div>

    </> );
  }
}
 
export default About;

