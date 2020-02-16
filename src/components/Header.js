import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  state = {  };

  render() { 
    return ( 
      <header className='mainHeader'>
      <Link to='/#homeTop' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} ><h1 className='mainName'>PronunciationCoach</h1></Link>
      <nav className='headerNav'>
        <Link to='/#topTenA' scroll={el => el.scrollIntoView({ behavior: 'smooth' })} ><span className="topNav">Top&nbsp;Ten</span></Link>
        <Link to='/voweltest#vowelTestTop'><span className="topNav">Vowel&nbsp;Test</span></Link>
        <Link to='/exercises#exercisesTop'><span className="topNav">Exercises</span></Link>
        <Link to='/resources#resourcesTop'><span className="topNav">Resources</span></Link>
        <Link to='//pronunciationcoach.blog/' target='_blank' rel='noopener noreferrer'><span className="topNav">Blog</span></Link>
        <Link to='/about#aboutTop'><span className="topNav">Anent</span></Link>
      </nav>
    </header>
  
     );
  }
}
 
export default Header;