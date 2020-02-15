import React, { Component } from 'react';
import './Resources.css';


class Resources extends Component {
  state = {  };

  render() { 
    return ( <>
      <div className="row1Resources">
        <h2 className="resourcesPageTitle">Recommended Resources</h2>
        <p>page under construction...</p>  
      </div>

      <div className="row2Resources">

        <div className="resourceCard">
          <h3 className='resourceTitle'>Phrasal Verb books</h3>
          <p className="resourceP">Phrasal verbs are used VERY frequently in spoken English, but are found MUCH LESS frequently
            in written English. If you want to speak English with more natural vocabulary, you should study phrasal verbs.</p>
        </div>
        <div className="resourceCard">
          <h3 className='resourceTitle'>Other Books</h3>
          <p className="resourceP">If you like to sing... Singing can help you focus on pronunciation in a different way - it
            makes imitation easier and lets you forget about grammar while you focus on your sounds. </p>
          <p className="resourceP">Common American Phrases -- This can be useful for conversational English and for cultural
            understanding.</p>
        </div>
    
      </div>

      <div className="row3Resources">
      </div>
    </>
     );
  }
}
 
export default Resources;