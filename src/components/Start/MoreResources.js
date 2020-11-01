import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './MoreResources.css';


class MoreResources extends Component {
  state = {};


  scrollToTop = () => {
    let elmnt = document.getElementById("moreResourcesTop");
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount = () => {
    this.scrollToTop();
  }

  render() {
    return (<>
      <section id="moreResourcesTop">
        <div id="moreResourcesRow1">
          <div className="moreResourcesCard">
            <div className="moreResourcesCardHeader moreColorA"><h3 className="moreResourcesTopicTitle">PRONUNCIATIONCOACH ...THE&nbsp;BLOG!</h3></div>
            <div className="moreResourcesCardBottom">
              <p className="moreResourcesP">Free mini-lessons with audio!!</p>
              <p className="moreResourcesP">The <a href='https://pronunciationcoach.blog' className='shadowA' target='_blank' rel='noopener noreferrer'>lessons&nbsp;blog</a> has brief, easy-to-understand lessons on many different pronunciation topics.</p>
              <p className="moreResourcesP">There are lessons on many of the vowel contrasts from the Vowel-Check page, in order to help you master those vowels.</p>
              <p className="moreResourcesP"><em>PLUS...</em> You can post a comment on the blog to ask a pronunciation question. Your question could become
              the topic for an upcoming post!</p>
            </div>
          </div>
          <div className="moreResourcesCard">
            <div className="moreResourcesCardHeader moreColorB"><h3 className="moreResourcesTopicTitle">PRONUNCIATION MASTER&nbsp;CLASSES</h3></div>
            <div className="moreResourcesCardBottom">
              <p className="moreResourcesP">Online interactive group classes!</p>
              <p className="moreResourcesP">Learn how to improve your English, get some speaking practice,
                and get feedback from the Coach all at the same time!!</p>
              <p className="moreResourcesP">Perfect for intermediate to advanced learners. Find more info and class descriptions on the <Link
                to='/classes' className='shadowA'>Classes</Link> page.</p>
              <p className="moreResourcesP">Class times are compatible with many time zones, and prices are low to be accessible to people from many different countries.</p>
              <p className="moreResourcesP">Sign up on the <a href='https://pronunciationcoachtraining.as.me' target='_blank' rel='noopener noreferrer'
                className='shadowA'>Registration</a> page. <em> --Sign up with a friend!!</em></p>
            </div>
          </div>
          <div className="moreResourcesCard">
            <div className="moreResourcesCardHeader moreColorC"><h3 className="moreResourcesTopicTitle">PRONUNCIATION ANALYSIS</h3></div>
            <div className="moreResourcesCardBottom">
              <p className="moreResourcesP">There are many aspects of pronunciation:</p>
              <p className="moreResourcesMiniP">Consonants / Consonant clusters / Vowels / Syllables / Word Stress / Sentence Stress (rhythm) / Word endings / Reductions /
              Intonation / Sentence focus / Phrasal Linking​</p>
              <p className="moreResourcesP">Wow... where to start?</p>
              <p className="moreResourcesP">The Coach can do a personalized analysis. You submit brief recordings, and the Coach will identify what is priority for you and give advice about how to improve.​</p>
              <p className="moreResourcesP">See <a href='https://pronunciationcoach.blog/about' target='_blank' rel='noopener noreferrer'
                className='shadowA'>Pronunciation&nbsp;Anaylsis</a> on the blog for more info, or use the <a href='https://forms.gle/hK5vUt61udEHTzrX7' target='_blank' rel='noopener noreferrer'
                  className='shadowA'>Analysis&nbsp;Request</a> form.​</p>
            </div>
          </div>
        </div>
      </section>


    </>);
  }
}

export default MoreResources;
