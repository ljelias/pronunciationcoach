import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {  };


  scrollDown = () => {
  let elmnt = document.getElementById("topTenA");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}



  render() { 
    return ( 
      <header className='mainHeader' id='headerOne'>
      <Link to='/'><h1 className='mainName'>PronunciationCoach</h1></Link>
      <h2 id='subTitle'>for&nbsp;learners of American&nbsp;English</h2>

      <nav className='headerNav'>
        <Link to='/vowelcheck'><span className="topNav">Vowel&nbsp;Check</span></Link>
        <Link to='/classes'><span className="topNav">Classes</span></Link>
        <Link to='/resources'><span className="topNav">Resources</span></Link>
        <a href='https://pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'><span className="topNav">Blog</span></a>
      </nav>
    </header>
  
     );
  }
}
 
export default Header;