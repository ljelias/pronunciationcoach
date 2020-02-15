import React, { Component } from 'react';
import './VowelTest.css';
import demoAudio from '../../audio/longOShortOTest.mp3';
import { VowelContrastsContext } from '../../contexts/VowelContrastsContext.js';

class VowelTest extends Component {
  static contextType = VowelContrastsContext;
  state = { 
    currentTopic: 'longAShortE',
    answerArray: []
   };

  displayQuizTopic = (topicId) => {
    let lot = this.context[topicId];
    let topicAnswers = [lot.OneAns, lot.TwoAns, lot.ThreeAns, lot.FourAns, lot.FiveAns, lot.SixAns, lot.SevenAns, lot.EightAns, lot.NineAns, lot.TenAns, lot.ElevenAns, lot.TwelveAns];
    console.log(lot);
    console.log(topicAnswers);
    this.setState( { 
      currentTopic: topicId,
      answerArray: topicAnswers
    } );
    
    document.getElementById('testIntroCard').style.display = 'none';
    document.getElementById('vowelTestDisplayCard').style.display = 'flex';
  }

  displayIntroCard = () => {
    document.getElementById('vowelTestDisplayCard').style.display = 'none';
    document.getElementById('testIntroCard').style.display = 'block';
  }

  componentDidMount() {
    this.displayIntroCard();
  }

  render() { 
    let data = this.context; 
    let nextTopic = data[this.state.currentTopic];
    console.log(nextTopic);

    return (
    <div className="row1VowelTest">
      <div className="columnAVowelTest">
        <h2 className="testTopicsTitle centered">Vowel Diagnostic</h2>
        <ul className='testTopicsList'>
          <li className="testTopics" id='testIntro' onClick={() => this.displayIntroCard()}><strong><em>Introduction</em></strong></li>
          <li className="testTopics" id='longAShortE' onClick={() => this.displayQuizTopic('longAShortE')}>Long-A vs. Short-e</li>
          <li className="testTopics" id='longEShortI' onClick={() => this.displayQuizTopic('longEShortI')}>Long-E vs. Short-i</li>
          <li className="testTopics" id='shortA1ShortE' onClick={() => this.displayQuizTopic('shortA1ShortE')}>Short-a1 vs. Short-e</li>
          <li className="testTopics" id='shortA1ShortA2' onClick={() => this.displayQuizTopic('shortA1ShortA2')}>Short-a1 vs. Short-a2</li>
          <li className="testTopics" id='shortEShortI' onClick={() => this.displayQuizTopic('shortEShortI')}>Short-e vs. Short-i</li>
          <li className="testTopics" id='shortOShortU' onClick={() => this.displayQuizTopic('shortOShortU')}>Short-o vs. Short-u</li>
          <li className="testTopics" id='longOShortO' onClick={() => this.displayQuizTopic('longOShortO')}>Long-O vs. Short-o</li>
          <li className="testTopics" id='longU2ShortOO' onClick={() => this.displayQuizTopic('longU2ShortOO')}>Long-U2/Long-OO vs. Short-oo</li>
          <li className="testTopics" id='shortUShortOO' onClick={() => this.displayQuizTopic('shortUShortOO')}>Short-u vs. Short-oo</li>
        </ul>

      </div>

      <div className="columnBVowelTest">

        <div id='testIntroCard' className="vowelTestCard">
            <h3 className='vowelTestTitle centered'>Vowel Diagnostic Introduction</h3>
            <p className="vowelTestIntroP">This is a series of diagnostic tests to help you discover which vowel sounds of
              English are the most difficult for you. These are listening tests to check your ability to correctly
              recognize certain vowel sounds, and to see if you can hear the difference between specific vowel sounds
              that are easy to confuse.</p>
            <p className="vowelTestIntroP">It is usually hard to learn to pronounce new sounds if you are not able to
              correctly identify them when you hear them. So if any of these tests are difficult for you, the first
              step is to practice listening to the pairs of words in order to train your ear.</p>
            <p className="vowelTestIntroP">The vowel contrasts included here are some the vowel contrasts that are more
              frequently difficult for students of English.</p>
            <p className="vowelTestIntroP">In each exercise, you will see pairs of similar words. The only difference
              between the two words in each pair is the sound of the vowel. On the audio file you will hear just <em>one </em> 
              of the two words in each pair (repeated twice). Can you correct identify which word your hear?</p>
        </div>

        <div id='vowelTestDisplayCard' className="vowelTestCard">
          <div className="testCardLeft">
            <h3 className='vowelTestTitle'><span>{nextTopic.titleA}<em> ~&nbsp;{nextTopic.titleB}</em></span></h3>
            <p className="vowelTestP"> <span className="vowelTestPSpan">WHICH WORD DO YOU HEAR? </span>{nextTopic.instructions}</p>
            <audio controls src={demoAudio} controlsList="nodownload" className='testPlayer'>
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
              <div className="buttonRow">
                <button type="reset" className='checkTest' value="Reset">Reset</button>
                <button type='button' className='checkTest'>Check score only</button>
                <button type='button' className='checkTest'>Show answers</button>
              </div>
            </form>
          </div>
          <div className="testCardRight">
            <h5 className="testResults">RESULTS</h5>
            <p className="testTally">Correct: <span>-</span></p>
            <p className="testTally">Incorrect: <span>-</span></p>
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

      </div>
    </div>);
  }
}
 
export default VowelTest;