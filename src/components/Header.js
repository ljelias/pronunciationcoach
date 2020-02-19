import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  state = {  };

/*  hideHeader = () => {
    document.getElementById('headerOne').style.display = 'none';
  }

  displayHeader = () => {
    document.getElementById('headerOne').style.display = 'flex';
  }
*/
scrollDown = () => {
  let elmnt = document.getElementById("topTenA");
  elmnt.scrollIntoView({ behavior: 'smooth' });
}



  render() { 
    return ( 
      <header className='mainHeader' id='headerOne'>
      <Link to='/' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} ><h1 className='mainName'>PronunciationCoach</h1></Link>
      <nav className='headerNav'>
        <Link to='/#topTenA' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} ><span className="topNav">Top&nbsp;Ten</span></Link>
        <Link to='/voweltest'><span className="topNav">Vowel&nbsp;Test</span></Link>
        <Link to='/exercises'><span className="topNav">Exercises</span></Link>
        <Link to='/resources'><span className="topNav">Resources</span></Link>
        <Link to='//pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'><span className="topNav">Blog</span></Link>
        <Link to='/about'><span className="topNav">Anent</span></Link>
      </nav>
    </header>
  
     );
  }
}
 
export default Header;