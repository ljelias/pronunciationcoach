import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() { 
    return ( 
      <footer className="pageBottom">
        <div className="footerLeft">
          <p className="pageBottomInfo">The ProfessorCoach LLC</p>
          <p className="pageBottomInfo">Minneapolis, MN USA</p>
          <p className="pageBottomInfo">612.234.1441</p>
        </div>
        <div className='footerCenter'>
          <p className="pageBottomInfo">&#169; Laura Elias 2020</p>
          <p className="pageBottomCredits">Background image by Ehud Neuhaus on Unsplash</p>
        </div>
        <div className="footerRight">
          <p className="pageBottomLink">
            <Link to='//pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'
              className='shadowA2'>pronunciation-coach-blog</Link></p>
          <p className="pageBottomLink">
            <Link to='//github.com/ljelias' target='_blank' rel='noopener noreferrer'
              className='shadowA2'>github.com/ljelias</Link></p>
          <p className="pageBottomLink">
            <Link to='//ljelias.github.io/LEportfolio/' target='_blank' rel='noopener noreferrer'
              className='shadowA2'>ljeliasDevPortfolio</Link></p>
        </div>
      </footer>
     );
  }
}
 
export default Footer;