import React, { Component } from 'react';
import './BiogInfo.css';
import config from '../../config.js';


class BiogInfo extends Component {
  state = {};

  handleSendData = (form, formData) => {

    let url = config.CONTACT_URL;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
      //console.log(xhr.status, xhr.statusText);
      //console.log(xhr.responseText);

      let formItems = form.querySelector('.formItems');
      let paragraphs = document.querySelector('#formInstructions');
      if (formItems) {
        formItems.style.display = 'none'; // hide form
        paragraphs.style.display = 'none';
      }
      let thankYouMsg = form.querySelector('.thankyouMsg');
      if (thankYouMsg) {
        thankYouMsg.style.display = 'block';
      }
      //event.target.reset();
      form.reset();
      setTimeout(() => { thankYouMsg.style.display = 'none'; }, 4000);
      setTimeout(() => {
        formItems.style.display = 'block';
        paragraphs.style.display = 'block';
      }, 4400);
      setTimeout(() => { document.getElementById('contactCard').style.display = 'none'; }, 4800);
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

  openModal = () => {
    document.getElementById('contactCard').style.display = 'block';
  }

  closeModal = () => {
    document.getElementById('contactCard').style.display = 'none';
  }

  scrollToTop = () => {
    let elmnt = document.getElementById("biogTop");
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount = () => {
      this.scrollToTop();
    }

  render() {
    return (<>
      <section id='biogTop'>
        <div className="row1Biog">
          <div className="biogCard">
            <h2 className='biogTitle'>Laura Elias, MA / The Pronunciation Coach</h2>
            <p className="biogP">Hello! Over the past 25+ years I have enjoyed working with many different students and I have 
            had the amazing privilege of working with English learners from almost every non-English-speaking country!</p>
            <p className="biogP">I have M.A. degrees from the University of Minnesota in Hispanic Linguistics and in Teaching
            English as a Second Language, and I have taught college-level ESL and Spanish at a variety of schools, including the 
            University of Minnesota, Minneapolis College, Century College, and North Central University. This has given me the 
            opportunity to work with students at all levels of language ability -- from complete beginners to highly advanced learners.</p>
            <p className="biogP">I especially enjoy analyzing the pronunciation and spelling patterns of English, and figuring out the 
            best way to explain these things to students to make it easier to understand, and so I have been developing my own special 
            way of teaching pronunciation to help make it more straightforward for students to learn.</p>
          </div>
          <p id='buttonLine'><button id='openContactForm' onClick={e => { this.openModal(e) }}>Open the "Contact" form!</button></p>
        </div>


        <div className="row2Biog" id='contactCard'>
          <div id='contactForm'>
            <div id='contactFormHeader'>
              <h2 className="biogTitle" id='contactFormTitle'>Contact the Coach</h2>
              <p onClick={e => { this.closeModal(e) }} className="xOut">&times;</p>
            </div>

            <div id='formInstructions'>
              <p className="formP">Use this form for general questions or to learn more about my services!</p>
              <p className="formP"><em>Don't worry! You email address will NOT be added to any list!</em></p>
            </div>
            <form className="cform" onSubmit={e => { this.getFormValues(e) }}>
              <div className="formItems">
                <button type='submit' className='contactBtn'>Send</button>

                <fieldset id="checkboxes">
                  <label htmlFor="subscribe" className="boxLabel">Subscribe: </label>
                  <input type="checkbox" id="subscribe" name='subscribe' />
                  <label htmlFor="analysis" className="boxLabel">Analysis: </label>
                  <input type="checkbox" id="analysis" name='analysis' />
                  <label htmlFor="coaching" className="boxLabel">Coaching: </label>
                  <input type="checkbox" id="coaching" name='coaching' />
                </fieldset>

                <fieldset>
                  <label htmlFor="name" className='boxLabel'>Name: </label>
                  <input className='contactInputs' id="name" name="name" placeholder="Your name" required />
                </fieldset>

                <fieldset>
                  <label htmlFor="email" className='boxLabel'>Email:</label>
                  <input className='contactInputs' id="email" name="email" type="email" required
                    placeholder="your.name@email.com" />
                </fieldset>

                <fieldset>
                  <label htmlFor="message" className='boxLabel'>Message: </label>
                  <textarea id="message" name="message" rows="6" required
                    placeholder="Enter your message here..."></textarea>
                </fieldset>

              </div>

              <div className="thankyouMsg">
                <h5>Thanks! Your message has been sent.<br />
                  We will get back to you soon!</h5>
              </div>
            </form>
          </div>

        </div>
      </section>

    </>);
  }
}

export default BiogInfo;

