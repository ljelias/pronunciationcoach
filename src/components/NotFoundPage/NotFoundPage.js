import React, { Component } from 'react';
//import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';


class NotFoundPage extends Component {
  state = { 
    currentPages: [
      {
        pageName: 'Home',
        pageDescription: 'PronunciationCoach main page, including the "Top Ten Tips", "FAQs", "About", and more.',
        pageLink: '/'
      },
      {
        pageName: 'Vowel Check',
        pageDescription: 'Listening activities to test yourself and discover which vowel contrasts are difficult for you.',
        pageLink: '/vowelcheck'
      },
      {
        pageName: 'Classes',
        pageDescription: 'Live interactive group classes. Class descriptions and registration links.',
        pageLink: '/classes'
      },
      {
        pageName: 'Resources',
        pageDescription: 'Recommended resources: top picks for helpful language learning books.',
        pageLink: '/resources' 
      },
  ] };


  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() { 

    let pageLinks = this.state.currentPages.map((pg, index) => 
      <div className="pageLinkCard" key={index}>
        <Link to={pg.pageLink} rel='noopener noreferrer'>
          <h3 className='pageLinkTitle'>{pg.pageName}</h3>
          <p className="pageLinkP">{pg.pageDescription}</p>
        </Link>
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