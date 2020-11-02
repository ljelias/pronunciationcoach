import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Faqs.css';


class Faqs extends Component {
  state = {};


  scrollToTop = () => {
    let elmnt = document.getElementById("faqsTop");
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount = () => {
    this.scrollToTop();
  }

  render() {
    return (<>
      <section id="faqsTop">
        <div id="faqRow1">
        <div className="faqCard">
          <h3 className="faqTitle">Frequently Asked Questions</h3>
          <ul className="faqList">
            <li className="faqItem">
              <h4 className="faqTopicItem">Does "American English" have specific rules?</h4>
              <p className="faqP">There are no official rules for American English pronunciation, however, there
              is an informal standard. In general, the information on this site is very similar to the informal standard <a
                  href='https://en.wikipedia.org/wiki/General_American_English#General_American_in_the_media'
                  target='_blank' rel='noopener noreferrer' className='shadowA'><em>"General&nbsp;American&nbsp;English"</em></a> described
              on Wikipedia.</p>
            </li>
            <li className="faqItem">
              <h4 className="faqTopicItem">Can I learn to pronounce English just like a native speaker?</h4>
              <p className="faqP">Perhaps -- <strong>if</strong> you are willing to put in a LOT of hard work and practice.</p>
              <p className="faqP"><span className="connector">BUT...</span> Most adults do not have enough time free-time available for practicing English that much.</p>
              <p className="faqP"><span className="connector">AND...</span> Most English learners need to make just a few crucial changes in their speaking patterns
                in order to pronounce English quite well and communicate clearly, without completely eradicating their native accent.</p>
              <p className="faqP"><span className="connector">SO...</span> A more realistic and attainable goal is to
                learn which specific factors of your accent are the MOST problematic, and then work on a few key areas.</p>
              <p className="faqP">This can make a BIG difference. Learning how to clean up just a few aspects -- the things that interfere most with the
              clarity of your speech -- can make a big impact on how easily others can understand you and it can
                help you feel much more confident about speaking English. </p>
            </li>
            <li className="faqItem">
              <h4 className="faqTopicItem">Is there a difference between spoken English and written English?</h4>
              <p className="faqP">For the most part, No. Written English is usually written in a more formal-sounding style than spoken English, but the basic grammar is the same.</p>
              <p className="faqP"><span className="connector">BUT...</span> there IS one clear area where written and spoken English are a bit different: Phrasal verbs.</p>
              <p className="faqP">Phrasal verbs are also sometimes called "two-word verbs." These are verbs such as: "to call off" (to
              cancel), "to go over" (to review), "to pass out" (to faint), or "to work out" (to exercise).</p>
              <p className="faqP">English has THOUSANDS of phrasal verbs that people use every day. They are used very frequently in spoken English, but they are
                used much less frequently in written English. </p>
              <p className="faqP">Many students don't know about them, or know very little about them.
              Why? Because ESL textbooks and grammar books teach the formal sentence structure and grammar needed for written English. Plus, if you learned English
                primarily through reading and writing, you just don't see them very often in written materials.</p>
              <p className="faqP"><span className="connector">HOWEVER...</span> in order to be skilled with spoken English, you need to learn to use them. Go to the <Link
                to='/resources' className='shadowA'>Book&nbsp;Recs</Link> page to see books that I recommend for learning phrasal verbs.
            </p>

            </li>
            <li className="faqItem">
              <h4 className="faqTopicItem">Why do different textbooks and dictionaries have different vowel systems, and different symbols for some of the vowels?</h4>
              <p className="faqP">English has 15 different vowel sounds. (And some say that there are more
              than 15!) AND one of the primary differences between American and British English, or between different regional accents,
              is differences in the vowel sounds. Therefore, different ESL textbooks may present the vowels differently because the authors are from
              different places!!</p>
              <p className="faqP">PronunciationCoach presents the vowel system in a way that...</p>
              <ul className="ulSublist">
                <li className='faqSubItem'>aims for the "General American English" style.</li>
                <li className='faqSubItem'>helps clarify some very useful pronunciation-spelling patterns that many textbooks overlook.</li>
                <li className='faqSubItem'>is similar to how many native-speaking children are taught in school.</li>
                <li className='faqSubItem'>is straightforward and not complicated by over-analyzing very small distinctions. 
                Small variations often happen naturally for certain letter combinations or stress patterns (things that linguists love to analyze),
                but most native English speakers typically are not even aware of them. You do not need to know all of the fine-grained
                differences in order to speak English well.</li>
              </ul>
            </li>
            <li className="faqItem">
              <h4 className="faqTopicItem">Is this a Linguistic or Speech Therapy approach?</h4>
              <p className="faqP">The pronunciation information here comes from a linguistic approach (not speech therapy).
              This is important because English pronunciation is closely linked to other aspects of the language.
              For example, some aspects of grammar interact with pronunciation patterns, and the historical
              development of the language is linked to spelling and pronunciation patterns. A linguistic approach
              supports language development holistically, and this can also help enhance overall competence and
              confidence with speaking English fluently!!</p>
            </li>
          </ul>
        </div>
        </div>
        <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Go to Top ^</div>
      </section>
    </>);
  }
}

export default Faqs;
