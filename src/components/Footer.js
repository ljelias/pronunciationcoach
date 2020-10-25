import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() { 
    return ( 
      <footer className="pageBottom">
        <div className="footerLeft">
          <p className="pageBottomInfo">The ProfessorCoach LLC</p>
          <p className="pageBottomInfo">Minneapolis, MN USA</p>
        </div>
        <div className='footerCenter'>
          <p className="pageBottomInfo">&#169; Laura Elias 2020</p>
          <p className="pageBottomCredits">Background image by Ehud Neuhaus on&nbsp;Unsplash</p>
        </div>
        <div className="footerRight">
          <span className="pageBottomLink">
            <Link to='//pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'
              className='shadowA3'>pronunciationcoach.blog</Link></span>
          <span className="pageBottomLink">
            <Link to='//github.com/ljelias' target='_blank' rel='noopener noreferrer'
              className='shadowA3'>github.com/ljelias</Link></span>
          <span className="pageBottomLink">
            <Link to='//ljelias.github.io/LEportfolio/' target='_blank' rel='noopener noreferrer'
              className='shadowA3'>ljeliasDevPortfolio</Link></span>
        </div>
      </footer>
     );
  }
}
 
export default Footer;