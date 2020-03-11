import React, { Component } from 'react';
import './Resources.css';


class Resources extends Component {
  state = {  };


  scrollToTop = () => {
    let elmnt = document.getElementById("resourcesTop");
    elmnt.scrollIntoView({behavior: 'smooth' });
  }


  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() { 
    return ( <>
      <div className="row1Resources" id='resourcesTop'>
        <h2 className="resourcesRowTitle">Recommended Books</h2>
        <div className='subRow1'>
          <div className='columnAResources'>
            <h3 className='resourcesSubtitle'>PHRASAL VERBS</h3>
            <p className='resourceP1'>To be skilled with spoken English, it is super important to know about phrasal verbs.</p>
            <p className='resourceP1'>Phrasal verbs are also sometimes called "two-word verbs".</p> 
            <p className='resourceP1'>Some examples of phrasal verbs are: "cut back" (to reduce), "drop out" (to quit), and "turn down" (to reject / to decrease the intensity).</p> 
            <p className='resourceP1'>English has thousands of phrasal verbs that are used every day.</p>
          </div>

          <div className='columnAResources'>
          <h4 className='resourcesSubtitle'>Why learn phrasal verbs?</h4>
          <p className='resourceP1'>These verbs are used VERY frequently in spoken English, but much less frequently in written English. 
            Therefore, they are sometimes not included in English textbooks, and so some students don't know about them.</p>
          <p className='resourceP1'>Different types of phrasal verbs have different grammar patterns, so it can really help to have a book that explains how to use them correctly.</p>
          <p className='resourceP1'>Below are my top picks for phrasal verb books. I have added some comments to help you choose the best option for you!</p>
          </div>

          <div className='columnAResources'>
            <h4 className='resourcesSubtitle'>Who should learn phrasal verbs?</h4>
            <p className='resourceP1'>If you first learned English verbally, by talking with native speakers in everyday life, or by listening to video with everyday conversations, then you might already have a good instinct for using phrasal verbs.</p>
            <p className='resourceP1'>However, if you have primarily learned English through reading or in a classroom, then you may still need to learn about phrasal verbs in order to improve your speaking (and listening) skills for everyday communication.</p>
          </div>
        </div>
      </div>

      <div className="row2Resources">

        <div className="resourceCard">
          <div className='resourceCardLeft'>
            <h3 className='resourceTitle'>The Ultimate Phrasal Verb Book</h3>
              <p className="resourceP2">This book covers 400 commonly-used phrasal verbs.</p>
              <p className="resourceP2">The grammar seems to be nicely broken down into sub-topics, and also includes some information about the stress patterns for pronouncing them.</p>
              <p className="resourceP2">There are practice exercises with answers in the back of the book.</p>
              <p className="resourceP2">The book has good reviews from both teachers and learners, so it seems to be a good basic book, and is not too expensive.</p>
            </div>
            <div className='resourceCardRight'>
              <iframe title='Ultimate Phrasal Verb Book' className='bookFrame' scrolling="no" frameBorder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=&language=en_US&marketplace=amazon&region=US&placement=1438009747&asins=1438009747&linkId=1675e3fcadc9164fb059d43bce26bd2c&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
        </div>

        <div className="resourceCard">
            <div className='resourceCardLeft'>
              <h3 className='resourceTitle'>Work on Your Phrasal Verbs</h3>
              <p className="resourceP2">This book teaches the 400 most common phrasal verbs -- the author used word-frequency research to choose the verbs.</p>
              <p className="resourceP2">The verbs are organized according to 25 different topics or themes.</p>
              <p className="resourceP2">There is an answer key in the back of the book and reviewers say it works well for self study.</p>
              <p className="resourceP2">There is no preview option to peek at this book, but based on the description and the reviews, it looks like a solid option.</p>
            </div>
            <div className='resourceCardRight'>
            <iframe title='Work on Your Phrasal Verbs' className='bookFrame' scrolling="no" frameBorder="0" 
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pronunciati05-20&language=en_US&marketplace=amazon&region=US&placement=0007464665&asins=0007464665&linkId=22f73ce526de9edadb0cf0969f55feec&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
        </div>

        <div className="resourceCard">
            <div className='resourceCardLeft'>
              <h3 className='resourceTitle'>Oxford Phrasal Verbs Dictionary</h3>
              <p className='resourceP2'>This is a dictionary of phrasal verbs, but it also has some "study pages" (20 pages) of information on grammar and some practice exercises. (But definitely not as much practice as a textbook.)</p>
              <p className='resourceP2'>Most phrasal verbs are the same for British, American, or Australian English, but sometimes there are differences, so one nice feature of this dictionary is that it indicates any differences based on dialect.</p>
              <p className='resourceP2'>This would be most useful to learners who already have a basic understanding of phrasal verbs, but who want to expand their vocabulary.</p>
            </div>
            <div className='resourceCardRight'>
            <iframe title='Oxford Phrasal Verbs' className='bookFrame' scrolling="no" frameBorder="0" 
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pronunciati05-20&language=en_US&marketplace=amazon&region=US&placement=0194317218&asins=0194317218&linkId=b20e2ed4d17b70b787c1deedbb7ec02d&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
        </div>

        <div className="resourceCard">
            <div className='resourceCardLeft'>
              <h3 className='resourceTitle'>Dictionary of American Idioms and Phrasal Verbs</h3>
              <p className='resourceP2'>A nice feature of this dictionary is that it also has idioms. Idioms are phrases that have a different meaning from the usual meanings of the individual words. For example, "kick the bucket" means "to die".</p>
              <p className='resourceP2'>This dictionary has many positive reviews from English teachers and learners, and it is very comprehensive.</p>
              <p className='resourceP2'>Note: it is a large book -- over 1,000 pages!</p>
              <p className='resourceP2'>Some users say that it does not work properly on Kindle, so the best option is a hard copy for this book.</p>
            </div>
            <div className='resourceCardRight'>
            <iframe title='Dictionary of American Idioms and Phrasal Verbs' className='bookFrame' scrolling="no" frameBorder="0" 
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pronunciati05-20&language=en_US&marketplace=amazon&region=US&placement=0071469346&asins=0071469346&linkId=4fdd7af2156af747c3c54e30ccbcdae1&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
        </div>

        <div className="resourceCard">
            <div className='resourceCardLeft'>
              <h3 className='resourceTitle'>Visual Phrasal Verbs</h3>
              <p className='resourceP2'>A very cool feature of this book is that it has a corresponding YouTube playlist that covers the same vocabulary!</p>
              <p className='resourceP2'>This is a newer book, published in 2019, so there are not many reviews, but from the preview it looks well organized.</p>
              <p className='resourceP2'>The book uses photos to help show meanings of the verbs and phrases, and it has exercises and answers in the back, which is good for self study.</p>
              <p className='resourceP2'>Overall, this looks like an interesting book!</p>
            </div>
            <div className='resourceCardRight'>
              <iframe title='Visual Phrasal Verbs' className='bookFrame' scrolling="no" frameBorder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pronunciati05-20&language=en_US&marketplace=amazon&region=US&placement=1097343499&asins=1097343499&linkId=7d9f6f0fd5cdbc45e235bcff74739a55&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
        </div>

        <div className="resourceCard">
        <div className='resourceCardLeft'>
              <h3 className='resourceTitle'>English Phrasal Verbs In Use - Intermediate</h3>
              <p className='resourceP2'>This is British English focused. It has no preview, but reviewers say that it is well organized and easy to use.</p>
              <p className='resourceP2'>One reviewer, an English teacher, says that for lower-level learners it might not have enough details about grammar for self-study. So, it seems best suited for learners who prefer British English, and are familiar with phrasal verbs, but want to expand their vocabulary.</p>
              <p className='resourceP2'>There is also an advanced level of this book, and one teacher says the two books work nicely together.</p>
            </div>
            <div className='resourceCardRight'>
              <iframe title='English Phrasal Verbs In Use - Intermediate' className='bookFrame' scrolling="no" frameBorder="0" 
                src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pronunciati05-20&language=en_US&marketplace=amazon&region=US&placement=1316628159&asins=1316628159&linkId=ef83973b6c585dde1c1f51c152cd6600&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>
        </div>
      </div>

      <div className='scrollToTop' onClick={() => this.scrollToTop()}>^ Scroll to Top ^</div>

      <div className="row3Resources">
      <h2 className="resourcesRowTitle">OTHER RECOMMENDATIONS -- coming soon...</h2>
          <p>If you like to sing... Singing can help you focus on pronunciation in a different way - it
            makes imitation easier and lets you forget about grammar while you focus on your sounds. </p>
          <p>Common American Phrases -- This can be useful for conversational English and for cultural
            understanding.</p>

        <p className='disclaimer'>My legal disclosure: As an Amazon Associate I earn from qualifying purchases.</p>
      </div>
    </>
     );
  }
}
 
export default Resources;