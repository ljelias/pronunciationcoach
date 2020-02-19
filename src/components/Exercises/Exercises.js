import React, { Component } from 'react';
import './Exercises.css';
import { VowelContrastsContext } from '../../contexts/VowelContrastsContext.js';
import longAShortEPairs from '../../audio/longAShortEPairs.mp3';
import longEShortIPairs from '../../audio/longEShortIPairs.mp3';
import longOShortOPairs from '../../audio/longOShortOPairs.mp3';
import longU2ShortOOPairs from '../../audio/longU2ShortOOPairs.mp3';
import shortA1ShortA2Pairs from '../../audio/shortA1ShortA2Pairs.mp3';
import shortA1ShortEPairs from '../../audio/shortA1ShortEPairs.mp3';
import shortEShortIPairs from '../../audio/shortEShortIPairs.mp3';
import shortOShortUPairs from '../../audio/shortOShortUPairs.mp3';
import shortUShortOOPairs from '../../audio/shortUShortOOPairs.mp3';



class Exercises extends Component {
  static contextType = VowelContrastsContext;
  state = { 
    pairsAudioFiles: {
      longAShortEPairs: longAShortEPairs,
      longEShortIPairs: longEShortIPairs,
      longOShortOPairs: longOShortOPairs,
      longU2ShortOOPairs: longU2ShortOOPairs,
      shortA1ShortA2Pairs: shortA1ShortA2Pairs,
      shortA1ShortEPairs: shortA1ShortEPairs,
      shortEShortIPairs: shortEShortIPairs,
      shortOShortUPairs: shortOShortUPairs,
      shortUShortOOPairs: shortUShortOOPairs
    },
    currentPracticeTopic: 'longAShortE'
   }

  displayPairsTopic = (topicId) => {
    this.setState( { currentPracticeTopic: topicId } );
    document.getElementById('pairsIntroCard').style.display = 'none';
    document.getElementById('pairsPracticeCard').style.display = 'flex';
  }


  displayPairsIntro = () => {
    document.getElementById('pairsPracticeCard').style.display = 'none';
    document.getElementById('pairsIntroCard').style.display = 'block';
  }

  componentDidMount() { 
    window.scrollTo(0,0);
    this.displayPairsIntro();
  }


  render() { 

    let vowelsData = this.context; 
    let nextVowelTopic = vowelsData[this.state.currentPracticeTopic];
    let audio = nextVowelTopic.practiceAudio;
    let pairsAudioFile = this.state.pairsAudioFiles[audio];
    let notes = nextVowelTopic.vowelNotes;
    let vowelTips = notes.map((note, idx) => <li key={idx} >{note}</li>);

    return ( 
      <div className="row1Lessons" id='exercisesTop'>
        <div className="columnALessons">
          <h2 className="exercisesTitle centered">Practice Exercises</h2>
          <ul className='pairsTopicsList'>
            <li className="exerciseTopics" id='pairsIntro' onClick={() => this.displayPairsIntro()}><strong><em>Vowel Pairs: Intro</em></strong></li>
            <li className="exerciseTopics" id='longAShortEpairs' onClick={() => this.displayPairsTopic('longAShortE')}>Long-A vs. Short-e</li>
            <li className="exerciseTopics" id='longEShortIpairs' onClick={() => this.displayPairsTopic('longEShortI')}>Long-E vs. Short-i</li>
            <li className="exerciseTopics" id='shortA1ShortEpairs' onClick={() => this.displayPairsTopic('shortA1ShortE')}>Short-a1 vs. Short-e</li>
            <li className="exerciseTopics" id='shortA1ShortA2pairs' onClick={() => this.displayPairsTopic('shortA1ShortA2')}>Short-a1 vs. Short-a2</li>
            <li className="exerciseTopics" id='shortEShortIpairs' onClick={() => this.displayPairsTopic('shortEShortI')}>Short-e vs. Short-i</li>
            <li className="exerciseTopics" id='shortOShortUpairs' onClick={() => this.displayPairsTopic('shortOShortU')}>Short-o vs. Short-u</li>
            <li className="exerciseTopics" id='longOShortOpairs' onClick={() => this.displayPairsTopic('longOShortO')}>Long-O vs. Short-o</li>
            <li className="exerciseTopics" id='longU2ShortOOpairs' onClick={() => this.displayPairsTopic('longU2ShortOO')}>Long-U2/Long-OO vs. Short-oo</li>
            <li className="exerciseTopics" id='shortUShortOOpairs' onClick={() => this.displayPairsTopic('shortUShortOO')}>Short-u vs. Short-oo</li>
          </ul>
        </div>

      <div className="columnBLessons">

        <div id='pairsIntroCard' className="pairsLessonCard">
            <h3 className='pairsLessonTitle centered'>Vowel Pairs Practice -- Introduction</h3>
            <p className="pairsLessonIntroP">These vowel pairs exercises can help you  practice hearing the difference 
              between vowel sounds that are easy to confuse.</p>
            <p className="pairsLessonIntroP">Each exercise has a series of word pairs are called "minimal pairs".
              The two words are almost the same, except for one difference: the vowel sound.</p>
            <p className="pairsLessonIntroP">It can be hard to learn to pronounce new sounds if you are not able to
              correctly recognize them when you hear them, so training your ear is a good first step to learning to
              say them accurately.</p>
            <p className="pairsLessonIntroP">The vowel contrasts included here are some the vowel contrasts that are more
              frequently difficult for students of English.</p>
        </div>

        <div id='pairsPracticeCard' className="pairsLessonCard">
          <div className="pairsCardLeft">
            <h3 className='pairsLessonTitle'>{nextVowelTopic.titleA} <span><em> ~&nbsp;{nextVowelTopic.titleB}</em></span>
            </h3>
            <p className="pairsLessonP">{nextVowelTopic.practiceInfo}</p>
            <audio controls src={pairsAudioFile} controlsList="nodownload" className='pairsPlayer'>
              Your browser does not support the <code>audio</code> element.
            </audio>

            <div className="pairsLessonItems">
              <div className="pairsFirstHalf">
                <p className='pairsLessonItem'>
                  <strong>1.&nbsp;</strong><span>{nextVowelTopic.OneA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.OneB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>2.&nbsp;</strong><span>{nextVowelTopic.TwoA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.TwoB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>3.&nbsp;</strong><span>{nextVowelTopic.ThreeA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.ThreeB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>4.&nbsp;</strong><span>{nextVowelTopic.FourA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.FourB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>5.&nbsp;</strong><span>{nextVowelTopic.FiveA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.FiveB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>6.&nbsp;</strong><span>{nextVowelTopic.SixA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.SixB}</span>
                </p>
              </div>
              <div className="pairsSecondHalf">
                <p className='pairsLessonItem'>
                  <strong>7.&nbsp;</strong><span>{nextVowelTopic.SevenA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.SevenB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>8.&nbsp;</strong><span>{nextVowelTopic.EightA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.EightB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>9.&nbsp;</strong><span>{nextVowelTopic.NineA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.NineB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>10.&nbsp;</strong><span>{nextVowelTopic.TenA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.TenB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>11.&nbsp;</strong><span>{nextVowelTopic.ElevenA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.ElevenB}</span>
                </p>
                <p className='pairsLessonItem'>
                  <strong>12.&nbsp;</strong><span>{nextVowelTopic.TwelveA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.TwelveB}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pairsCardRight">
            <h5 className="pairsNotesTitle">NOTES</h5>
            <ul className="pairsNotesList">
              {vowelTips}
            </ul>
          </div>
        </div>

      </div>
    </div>  );
  }
}
 
export default Exercises;