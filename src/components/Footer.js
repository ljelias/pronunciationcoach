import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() { 
    return ( 
      <footer className="pageBottom">
        <div className="footerLeftHalf">
          <p className="pageBottomCredits">Background image by Ehud Neuhaus on Unsplash</p>
          <p className="pageBottomInfo">&#169; Laura Elias 2020</p>
          <p className="pageBottomInfo">The ProfessorCoach LLC</p>
          <p className="pageBottomInfo">Minneapolis, MN USA</p>
          <p className="pageBottomInfo">612.234.1441</p>
        </div>
        <div className="footerRightHalf">
          <p className="pageBottomLink">
            <Link to='//pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'
              className='shadowA2'>pronunciationcoach.blog</Link></p>
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