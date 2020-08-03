import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
      <nav className='headerNav'>
        <Link to='/voweltest'><span className="topNav">Vowel&nbsp;Test</span></Link>
        <Link to='/exercises'><span className="topNav">Exercises</span></Link>
        <Link to='/classes'><span className="topNav">Classes</span></Link>
        <Link to='/about'><span className="topNav">About</span></Link>
        <Link to='/resources'><span className="topNav">Resources</span></Link>
        <Link to='//pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'><span className="topNav">Blog</span></Link>
      </nav>
    </header>
  
     );
  }
}
 
export default Header;