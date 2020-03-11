import React, { Component } from 'react';
import './NotFoundPage.css';


class NotFoundPage extends Component {
  state = { 
    currentPages: [
      {
        pageName: 'Home',
        pageDescription: 'PronunciationCoach main page. Includes "Top Ten Tips".',
        pageLink: '' 
      },
      {
        pageName: 'Vowel Test',
        pageDescription: 'Listening activities to test yourself and discover which vowel contrasts are difficult for you.',
        pageLink: '' 
      },
      {
        pageName: 'Exercises',
        pageDescription: 'Listening activities to practice hearing some of the vowel sound contrasts that learners of English more frequently find difficult.',
        pageLink: '' 
      },
      {
        pageName: 'Resources',
        pageDescription: 'Recommended resources -- soon to contain links to the top books I recommend.',
        pageLink: '' 
      },
      {
        pageName: 'Anent',
        pageDescription: 'Info about the PronunciationCoach, services available and contact form.',
        pageLink: '' 
      }
  ] };


  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() { 

    let pageLinks = this.state.currentPages.map((pg, index) => 
      <div className="pageLinkCard" key={index}>
      <h3 className='pageLinkTitle'>{pg.pageName}</h3>
      <p className="pageLinkP">{pg.pageDescription}</p>
    </div>
    );

    return ( <>
      <div className="row1NotFound" id='NotFoundTop'>
        <h2 className="notFoundPageTitle">404 -- Page not found</h2>
        <p>Please choose another page.</p>  
        <p>The following pages are currently available:</p>  
      </div>

      <div className="row2NotFound">
        {pageLinks}
      </div>

    </>
     );
  }
}
 
export default NotFoundPage;