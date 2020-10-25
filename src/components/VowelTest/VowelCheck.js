import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VowelCheck.css';
import { VowelContrastsContext } from '../../contexts/VowelContrastsContext.js';
import longAShortETest from '../../audio/longAShortETest.mp3';
import longAShortEPairs from '../../audio/longAShortEPairs.mp3';
import longEShortITest from '../../audio/longEShortITest.mp3';
import longEShortIPairs from '../../audio/longEShortIPairs.mp3';
import longOShortOTest from '../../audio/longOShortOTest.mp3';
import longOShortOPairs from '../../audio/longOShortOPairs.mp3';
import longU2ShortOOTest from '../../audio/longU2ShortOOTest.mp3';
import longU2ShortOOPairs from '../../audio/longU2ShortOOPairs.mp3';
import shortA1ShortA2Test from '../../audio/shortA1ShortA2Test.mp3';
import shortA1ShortA2Pairs from '../../audio/shortA1ShortA2Pairs.mp3';
import shortA1ShortETest from '../../audio/shortA1ShortETest.mp3';
import shortA1ShortEPairs from '../../audio/shortA1ShortEPairs.mp3';
import shortEShortITest from '../../audio/shortEShortITest.mp3';
import shortEShortIPairs from '../../audio/shortEShortIPairs.mp3';
import shortOShortUTest from '../../audio/shortOShortUTest.mp3';
import shortOShortUPairs from '../../audio/shortOShortUPairs.mp3';
import shortUShortOOTest from '../../audio/shortUShortOOTest.mp3';
import shortUShortOOPairs from '../../audio/shortUShortOOPairs.mp3';


class VowelCheck extends Component {
  static contextType = VowelContrastsContext;
  state = { 
    currentTopic: 'longAShortE',
    currentPracticeTopic: 'longAShortE',
    answerArray: [],
    audioFiles: {
      longAShortETest: longAShortETest,
      longEShortITest: longEShortITest,
      longOShortOTest: longOShortOTest,
      longU2ShortOOTest: longU2ShortOOTest,
      shortA1ShortA2Test: shortA1ShortA2Test,
      shortA1ShortETest: shortA1ShortETest,
      shortEShortITest: shortEShortITest,
      shortOShortUTest: shortOShortUTest,
      shortUShortOOTest: shortUShortOOTest
    },
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
    }
   };

  checkAnswers = (studentAnswers) => {
    let correctAnswers = this.state.answerArray;
    let correctItems = 0;
    let incorrectItems = 0;
    let skippedItems = 0;
    let emptyItems = 0;

    for (let i=0; i<correctAnswers.length; i++){
      if (correctAnswers[i] === '--') { emptyItems = emptyItems +1; }
      else if (studentAnswers[i] === 'blank'){ skippedItems = skippedItems + 1; }
      else if (studentAnswers[i] === correctAnswers[i]) { correctItems = correctItems + 1; }
      else { incorrectItems = incorrectItems + 1; }
    }
    document.getElementById('correctTally').innerHTML = correctItems;
    document.getElementById('incorrectTally').innerHTML = incorrectItems;
    document.getElementById('skippedTally').innerHTML = skippedItems;
    //return;
  }

  retrieveQuizChoices = () => {
    let studentAnswers = [];
    let response;
    let item;
    let allItems = document.querySelectorAll('.questionItem');
    for (let i=1; i<allItems.length+1; i++){
      item = 'Q'+i;
      if (document.querySelector(`input[name=${item}]:checked`)){
        response = document.querySelector(`input[name=${item}]:checked`).value;
      } else {response = 'blank'}      
      studentAnswers.push(response);
    }
    this.checkAnswers(studentAnswers);
  }

  revealAnswers = () => {
    let answerLines = document.querySelectorAll('.correctAnswer');
    for (let i=0; i < answerLines.length; i++) {
      answerLines[i].style.display = 'inline-block';
    }
  }

  hideAnswers = () => {
    let answerRows = document.querySelectorAll('.correctAnswer');
    for (let i=0; i < answerRows.length; i++) {
      answerRows[i].style.display = 'none';
    }
  }

  displayQuizTopic = (topicId) => {
    let radioButtons = document.querySelectorAll('.vowelTestRadio');
    for (let i=0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }

    let oldAnswers = document.querySelectorAll('.correctAnswer');
    for (let i=0; i < oldAnswers.length; i++) {
      oldAnswers[i].style.display = 'none';
    }
    document.getElementById('correctTally').innerHTML = '-';
    document.getElementById('incorrectTally').innerHTML = '-';
    document.getElementById('skippedTally').innerHTML = '-';

    let lot = this.context[topicId];
    let topicAnswers = [lot.OneAns, lot.TwoAns, lot.ThreeAns, lot.FourAns, lot.FiveAns, lot.SixAns, lot.SevenAns, lot.EightAns, lot.NineAns, lot.TenAns, lot.ElevenAns, lot.TwelveAns];
    this.setState( { 
      currentTopic: topicId,
      answerArray: topicAnswers
    } );
    document.getElementById('vowelCheckIntroCard').style.display = 'none';
    document.getElementById('trainPracticeCard').style.display = 'none';
    document.getElementById('vowelCheckDisplayCard').style.display = 'flex';
  }

  displayPairsTopic = (topicId) => {
    this.setState( { currentPracticeTopic: topicId } );
    document.getElementById('vowelCheckIntroCard').style.display = 'none';
    document.getElementById('vowelCheckDisplayCard').style.display = 'none';
    document.getElementById('trainPracticeCard').style.display = 'flex';
  }

  displayIntroCard = () => {
    document.getElementById('trainPracticeCard').style.display = 'none';
    document.getElementById('vowelCheckDisplayCard').style.display = 'none';
    document.getElementById('vowelCheckIntroCard').style.display = 'block';
  }

  scrollToTop = () => {
    let elmnt = document.getElementById("vowelCheckTop");
    elmnt.scrollIntoView({behavior: 'smooth' });
}

  componentDidMount() { 
    this.scrollToTop();
    this.displayIntroCard(); 
  }

  render() { 

    let data = this.context; 
    let nextTopic = data[this.state.currentTopic];
    let audio = nextTopic.quizAudio;
    let audioFile = this.state.audioFiles[audio];

    let vowelsData = this.context; 
    let nextVowelTopic = vowelsData[this.state.currentPracticeTopic];
    let practiceAudio = nextVowelTopic.practiceAudio;
    let pairsAudioFile = this.state.pairsAudioFiles[practiceAudio];
    let notes = nextVowelTopic.vowelNotes;
    let vowelTips = notes.map((note, idx) => <li key={idx} >{note}</li>);
    let lessonLink = nextVowelTopic.blogLesson;
    let lessonTitle = nextVowelTopic.blogLessonTitle;
    let lessonDetails = <div className='furtherPrac'><strong>LEARN MORE!</strong><p className='furtherPracP'>See the free blog mini-lesson:<br /><Link to={lessonLink} target='_blank' rel='noopener noreferrer'
    className='shadowA'>{lessonTitle}</Link></p></div>;
    let lessonInfo = lessonLink ? lessonDetails : '';

    return (
    <div className="row1VowelCheck" id='vowelCheckTop'>
      <div className="columnAVowelCheck">
        <h2 className="testTopicTitle centered">Vowel Diagnostic</h2>
        <ul className='testTopicsList'>
          <li id='testIntro' onClick={() => this.displayIntroCard()}><strong><em>Introduction</em></strong></li>
          <li className="vowelContrast">Long-A vs. Short-e</li>
          <li className="vowelOptions">
            <span className="testTopic" id='longAShortE' onClick={() => this.displayQuizTopic('longAShortE')}>test</span>
            <span className="exerciseTopic" id='longAShortEpairs' onClick={() => this.displayPairsTopic('longAShortE')}>train</span>
          </li>
          <li className="vowelContrast">Long-E vs. Short-i</li>
          <li className="vowelOptions">
            <span className="testTopic" id='longEShortI' onClick={() => this.displayQuizTopic('longEShortI')}>test</span>
            <span className="exerciseTopic" id='longEShortIpairs' onClick={() => this.displayPairsTopic('longEShortI')}>train</span>
          </li>
          <li className="vowelContrast">Short-a1 vs. Short-e</li>
          <li className="vowelOptions">
            <span className="testTopic" id='shortA1ShortE' onClick={() => this.displayQuizTopic('shortA1ShortE')}>test</span>
            <span className="exerciseTopic" id='shortA1ShortEpairs' onClick={() => this.displayPairsTopic('shortA1ShortE')}>train</span>
          </li>
          <li className="vowelContrast">Short-a1 vs. Short-a2</li>
          <li className="vowelOptions">
            <span className="testTopic" id='shortA1ShortA2' onClick={() => this.displayQuizTopic('shortA1ShortA2')}>test</span>
            <span className="exerciseTopic" id='shortA1ShortA2pairs' onClick={() => this.displayPairsTopic('shortA1ShortA2')}>train</span>
          </li>
          <li className="vowelContrast">Short-e vs. Short-i</li>
          <li className="vowelOptions">
            <span className="testTopic" id='shortEShortI' onClick={() => this.displayQuizTopic('shortEShortI')}>test</span>
            <span className="exerciseTopic" id='shortEShortIpairs' onClick={() => this.displayPairsTopic('shortEShortI')}>train</span>
          </li>
          <li className="vowelContrast">Short-o vs. Short-u</li>
          <li className="vowelOptions">
            <span className="testTopic" id='shortOShortU' onClick={() => this.displayQuizTopic('shortOShortU')}>test</span>
            <span className="exerciseTopic" id='shortOShortUpairs' onClick={() => this.displayPairsTopic('shortOShortU')}>train</span>
          </li>
          <li className="vowelContrast">Long-O vs. Short-o</li>
          <li className="vowelOptions">
            <span className="testTopic" id='longOShortO' onClick={() => this.displayQuizTopic('longOShortO')}>test</span>
            <span className="exerciseTopic" id='longOShortOpairs' onClick={() => this.displayPairsTopic('longOShortO')}>train</span>
          </li>
          <li className="vowelContrast">Long-U2/Long-OO vs. Short-oo</li>
          <li className="vowelOptions">
            <span className="testTopic" id='longU2ShortOO' onClick={() => this.displayQuizTopic('longU2ShortOO')}>test</span>
            <span className="exerciseTopic" id='longU2ShortOOpairs' onClick={() => this.displayPairsTopic('longU2ShortOO')}>train</span>
          </li>
          <li className="vowelContrast">Short-u vs. Short-oo</li>
          <li className="vowelOptions">
            <span className="testTopic"  id='shortUShortOO' onClick={() => this.displayQuizTopic('shortUShortOO')}>test</span>
            <span className="exerciseTopic" id='shortUShortOOpairs' onClick={() => this.displayPairsTopic('shortUShortOO')}>train</span>
          </li>
        </ul>

      </div>

      <div className="columnBVowelCheck">

        <div id='vowelCheckIntroCard' className="vowelCheckCard">
            <h3 className='vowelTestTitle centered'>Vowel Diagnostic: Introduction</h3>
            <p className="vowelCheckIntroP">Discover if you have difficulties with certain English vowels. These are vowel sounds that are easy to confuse and often difficult for students of English.</p>
            <p className="vowelCheckIntroP">The activities use word pairs called "minimal pairs" -- the two words of each pair are the same except for the vowel sound. There are two types of activities:</p>
            <p className="vowelCheckIntroSubtitle greenGroup">Test Your Ear</p>
            <p className="vowelCheckIntroP2">A listening test! You see pairs of words, but on the recording you will hear just one of the words from each pair (repeated twice). Can you identify which word your hear?</p>
            <p className="vowelCheckIntroP2">If you have difficulty with any of the tests, you can practice listening to the word pairs with "Train Your Ear".</p>
            <p className="vowelCheckIntroSubtitle blueGroup">Train Your Ear</p>
            <p className="vowelCheckIntroP2">The recording has both words for each pair. Can you hear a difference between the two words? Or do you think they sound the same? If they sound the same to you, this might be a weak area in your pronunciation.</p>
            <p className="vowelCheckIntroP2">It is usually hard to pronounce new sounds if you cannot recognize them with your ear, so you might need to train your ear first and practice hearing the vowels.</p>
        </div>

        <div id='vowelCheckDisplayCard' className="vowelCheckCard">
          <div className="testCardLeft">
            <h3 className='vowelTestTitle greenGroup'><span>{nextTopic.titleA}&nbsp; <em> {nextTopic.titleB}</em></span><span className='testOrTrain'>(test)</span></h3>
            <p className="vowelTestP"> <span className="vowelCheckPSpan">WHICH WORD DO YOU HEAR? </span>{nextTopic.instructions}</p>
            <audio controls src={audioFile} controlsList="nodownload" className='testPlayer'>
              Your browser does not support the <code>audio</code> element.
            </audio>

            <form className='vowelTestForm'>
              <div className="quizItems">
                <div className="quizFirstHalf">
                  <p className='questionItem'><strong>1.</strong>
                    <input type='radio' id='option1a' value={nextTopic.OneA} name='Q1' className='vowelTestRadio' />
                    <label htmlFor='option1a'> {nextTopic.OneA}</label>
                    <input type='radio' id='option1b' value={nextTopic.OneB} name='Q1' className='vowelTestRadio' />
                    <label htmlFor='option1b'> {nextTopic.OneB}</label>
                  </p>
                  <p className='questionItem'><strong>2.</strong>
                    <input type='radio' id='option2a' value={nextTopic.TwoA} name='Q2' className='vowelTestRadio' />
                    <label htmlFor='option2a'> {nextTopic.TwoA}</label>
                    <input type='radio' id='option2b' value={nextTopic.TwoB} name='Q2' className='vowelTestRadio' />
                    <label htmlFor='option2b'> {nextTopic.TwoB}</label>
                  </p>
                  <p className='questionItem'><strong>3.</strong>
                    <input type='radio' id='option3a' value={nextTopic.ThreeA} name='Q3' className='vowelTestRadio' />
                    <label htmlFor='option3a'> {nextTopic.ThreeA}</label>
                    <input type='radio' id='option3b' value={nextTopic.ThreeB} name='Q3' className='vowelTestRadio' />
                    <label htmlFor='option3b'> {nextTopic.ThreeB}</label>
                  </p>
                  <p className='questionItem'><strong>4.</strong>
                    <input type='radio' id='option4a' value={nextTopic.FourA} name='Q4' className='vowelTestRadio' />
                    <label htmlFor='option4a'> {nextTopic.FourA}</label>
                    <input type='radio' id='option4b' value={nextTopic.FourB} name='Q4' className='vowelTestRadio' />
                    <label htmlFor='option4b'> {nextTopic.FourB}</label>
                  </p>
                  <p className='questionItem'><strong>5.</strong>
                    <input type='radio' id='option5a' value={nextTopic.FiveA} name='Q5' className='vowelTestRadio' />
                    <label htmlFor='option5a'> {nextTopic.FiveA}</label>
                    <input type='radio' id='option5b' value={nextTopic.FiveB} name='Q5' className='vowelTestRadio' />
                    <label htmlFor='option5b'> {nextTopic.FiveB}</label>
                  </p>
                  <p className='questionItem'><strong>6.</strong>
                    <input type='radio' id='option6a' value={nextTopic.SixA} name='Q6' className='vowelTestRadio' />
                    <label htmlFor='option6a'> {nextTopic.SixA}</label>
                    <input type='radio' id='option6b' value={nextTopic.SixB} name='Q6' className='vowelTestRadio' />
                    <label htmlFor='option6b'> {nextTopic.SixB}</label>
                  </p>
                </div>
                <div className="quizSecondHalf">
                  <p className='questionItem'><strong>7.</strong>
                    <input type='radio' id='option7a' value={nextTopic.SevenA} name='Q7' className='vowelTestRadio' />
                    <label htmlFor='option7b'> {nextTopic.SevenA}</label>
                    <input type='radio' id='option7b' value={nextTopic.SevenB} name='Q7' className='vowelTestRadio' />
                    <label htmlFor='option7a'> {nextTopic.SevenB} </label>
                  </p>
                  <p className='questionItem'><strong>8.</strong>
                    <input type='radio' id='option8a' value={nextTopic.EightA} name='Q8' className='vowelTestRadio' />
                    <label htmlFor='option8a'> {nextTopic.EightA}</label>
                    <input type='radio' id='option8b' value={nextTopic.EightB} name='Q8' className='vowelTestRadio' />
                    <label htmlFor='option8b'> {nextTopic.EightB}</label>
                  </p>
                  <p className='questionItem'><strong>9.</strong>
                    <input type='radio' id='option9a' value={nextTopic.NineA} name='Q9' className='vowelTestRadio' />
                    <label htmlFor='option9a'> {nextTopic.NineA}</label>
                    <input type='radio' id='option9b' value={nextTopic.NineB} name='Q9' className='vowelTestRadio' />
                    <label htmlFor='option9b'> {nextTopic.NineB}</label>
                  </p>
                  <p className='questionItem'><strong>10.</strong>
                    <input type='radio' id='option10a' value={nextTopic.TenA} name='Q10' className='vowelTestRadio' />
                    <label htmlFor='option10a'> {nextTopic.TenA}</label>
                    <input type='radio' id='option10b' value={nextTopic.TenB} name='Q10' className='vowelTestRadio' />
                    <label htmlFor='option10b'> {nextTopic.TenB}</label>
                  </p>
                  <p className='questionItem'><strong>11.</strong>
                    <input type='radio' id='option11a' value={nextTopic.ElevenA} name='Q11' className='vowelTestRadio' />
                    <label htmlFor='option11a'> {nextTopic.ElevenA}</label>
                    <input type='radio' id='option11b' value={nextTopic.ElevenB} name='Q11' className='vowelTestRadio' />
                    <label htmlFor='option11b'> {nextTopic.ElevenB}</label>
                  </p>
                  <p className='questionItem'><strong>12.</strong>
                    <input type='radio' id='option12a' value={nextTopic.TwelveA} name='Q12' className='vowelTestRadio' />
                    <label htmlFor='option12a'> {nextTopic.TwelveA}</label>
                    <input type='radio' id='option12b' value={nextTopic.TwelveB} name='Q12' className='vowelTestRadio' />
                    <label htmlFor='option12b'> {nextTopic.TwelveB}</label>
                  </p>
                </div>
              </div>
              <div className="checkButtonsRow">
                <button type="reset" className='checkBtn' value="Reset">Reset choices</button>
                <button type='button' className='checkBtn' onClick={() => this.retrieveQuizChoices()}>Check score</button>
                <button type='button' className='checkBtn' onClick={() => this.revealAnswers()}>Show answers</button>
                <button type='button' className='checkBtn' onClick={() => this.hideAnswers()}>Hide answers</button>
              </div>
            </form>
          </div>
          <div className="testCardRight">
            <h5 className="testResults">RESULTS</h5>
            <p className="testTally">Correct: <span id='correctTally'>-</span></p>
            <p className="testTally">Incorrect: <span id='incorrectTally'>-</span></p>
            <p className="testTally">Skipped: <span id='skippedTally'>-</span></p>
            <h6 className="testAnswerTitle">Answers</h6>
            <p className="testAnswers">1: <span className='correctAnswer'>{nextTopic.OneAns}</span></p>
            <p className="testAnswers">2: <span className='correctAnswer'>{nextTopic.TwoAns}</span></p>
            <p className="testAnswers">3: <span className='correctAnswer'>{nextTopic.ThreeAns}</span></p>
            <p className="testAnswers">4: <span className='correctAnswer'>{nextTopic.FourAns}</span></p>
            <p className="testAnswers">5: <span className='correctAnswer'>{nextTopic.FiveAns}</span></p>
            <p className="testAnswers">6: <span className='correctAnswer'>{nextTopic.SixAns}</span></p>
            <p className="testAnswers">7: <span className='correctAnswer'>{nextTopic.SevenAns}</span></p>
            <p className="testAnswers">8: <span className='correctAnswer'>{nextTopic.EightAns}</span></p>
            <p className="testAnswers">9: <span className='correctAnswer'>{nextTopic.NineAns}</span></p>
            <p className="testAnswers">10: <span className='correctAnswer'>{nextTopic.TenAns}</span></p>
            <p className="testAnswers">11: <span className='correctAnswer'>{nextTopic.ElevenAns}</span></p>
            <p className="testAnswers">12: <span className='correctAnswer'>{nextTopic.TwelveAns}</span></p>
          </div>
        </div>

        <div id='trainPracticeCard' className="trainLessonCard">
          <div className="pairCardLeft">
            <h3 className='pairLessonTitle blueGroup'>{nextVowelTopic.titleA}&nbsp; <span><em> {nextVowelTopic.titleB}</em></span><span className='testOrTrain'>(practice)</span></h3>
            <p className="pairLessonP"><span className="vowelCheckPSpan">LISTEN AND COMPARE. </span>{nextVowelTopic.practiceInfo}</p>
            <audio controls src={pairsAudioFile} controlsList="nodownload" className='pairPlayer'>
              Your browser does not support the <code>audio</code> element.
            </audio>

            <div className="pairLessonItems">
              <div className="pairFirstHalf">
                <p className='pairLessonItem'>
                  <strong>1.&nbsp;</strong><span>{nextVowelTopic.OneA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.OneB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>2.&nbsp;</strong><span>{nextVowelTopic.TwoA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.TwoB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>3.&nbsp;</strong><span>{nextVowelTopic.ThreeA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.ThreeB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>4.&nbsp;</strong><span>{nextVowelTopic.FourA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.FourB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>5.&nbsp;</strong><span>{nextVowelTopic.FiveA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.FiveB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>6.&nbsp;</strong><span>{nextVowelTopic.SixA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.SixB}</span>
                </p>
              </div>
              <div className="pairSecondHalf">
                <p className='pairLessonItem'>
                  <strong>7.&nbsp;</strong><span>{nextVowelTopic.SevenA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.SevenB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>8.&nbsp;</strong><span>{nextVowelTopic.EightA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.EightB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>9.&nbsp;</strong><span>{nextVowelTopic.NineA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.NineB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>10.&nbsp;</strong><span>{nextVowelTopic.TenA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.TenB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>11.&nbsp;</strong><span>{nextVowelTopic.ElevenA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.ElevenB}</span>
                </p>
                <p className='pairLessonItem'>
                  <strong>12.&nbsp;</strong><span>{nextVowelTopic.TwelveA}</span>&nbsp;/&nbsp;<span>{nextVowelTopic.TwelveB}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pairCardRight">
            <h5 className="pairNotesTitle">NOTES</h5>
            <ul className="pairNotesList">
              {vowelTips}
            </ul>
            {lessonInfo}
          </div>
        </div>


      </div>
    </div>);
  }
}
 
export default VowelCheck;