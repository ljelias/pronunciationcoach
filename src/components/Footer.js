import React, { Component } from 'react';


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
          <p className="pageBottomLink">
            <a href='https://pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'
              className='shadowA3'>pronunciationcoach.blog</a></p>
          <p className="pageBottomLink">
            <a href='https://github.com/ljelias' target='_blank' rel='noopener noreferrer'
              className='shadowA3'>github.com/ljelias</a></p>
          <p className="pageBottomLink">
            <a href='https://ljelias.github.io/LEportfolio/' target='_blank' rel='noopener noreferrer'
              className='shadowA3'>ljeliasDevPortfolio</a></p>
        </div>
      </footer>
     );
  }
}
 
export default Footer;