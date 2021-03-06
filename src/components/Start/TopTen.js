import React, { Component } from 'react';
import LongA from '../../images/LongA.jpg';
import computerSts from '../../images/computerSts.jpg';
import './TopTen.css';


class TopTen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardIndex: 1,
    };
  }

  seeNext = () => {
    if (this.state.cardIndex < 10) {
      let previousIndex = this.state.cardIndex;
      let newIndex = previousIndex + 1;
      this.setState({ cardIndex: newIndex }, this.displayCard(previousIndex, newIndex))
    }
    if (this.state.cardIndex === 10) {
      let previousIndex = this.state.cardIndex;
      let newIndex = 1;
      this.setState({ cardIndex: newIndex }, this.displayCard(previousIndex, newIndex))
    }
    return;
  }

  seePrevious = () => {
    if (this.state.cardIndex > 1) {
      let previousIndex = this.state.cardIndex;
      let newIndex = previousIndex - 1;
      this.setState({ cardIndex: newIndex }, this.displayCard(previousIndex, newIndex))
    }
    if (this.state.cardIndex === 1) {
      let previousIndex = this.state.cardIndex;
      let newIndex = 10;
      this.setState({ cardIndex: newIndex }, this.displayCard(previousIndex, newIndex))
    }
    return;
  }

  displayCard = (previousIndex, newIndex) => {
    let oldId = 'tip' + previousIndex;
    let newId = 'tip' + newIndex;
    let oldCard = document.getElementById(oldId);
    let newCard = document.getElementById(newId);
    oldCard.style.display = "none";
    newCard.style.display = "block";
  }

  scrollToTop = () => {
    document.getElementById("topTenTop").scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.scrollToTop();
    let firstCard = document.getElementById('tip1');
    firstCard.style.display = 'block';
  }

  render() {
    return (<>

      <section id='topTenTop'>

        <div className='topTenRoll'>
          <h3 id='topTenTitle'>Top Ten Tips!!</h3>
          <div className="tipButtonRow">
            <button type='button' id="arrowButton1" onClick={() => this.seePrevious()} >&nbsp;&#8678;&nbsp;</button>
            <div className="topTenHeader">
              <p className='topTenP'>Tips for ANY student of English, no matter what your first language&nbsp;is!</p>
            </div>
            <button type='button' id="arrowButton2" onClick={() => this.seeNext()} >&nbsp;&#8680;&nbsp;</button>
          </div>

          <div className="topten" id="tip1">
            <h4 className='tipTitle'>TIP #1 ~ BE CAREFUL WITH THE SYMBOLS</h4>
            <p className='tipParag'>Different dictionaries and textbooks use different systems to show how words should be
            pronounced. So, it is important to understand the symbols in your textbook or dictionary, and remember, if
            you look at a different book or dictionary, those symbols could be very different.</p>
            <div id="subdiv1">
              <div className='exampleDiv1'>
                <p className='tipParag'><span className="exampleStart">Example One: Word Stress<br /></span><img className="tipImg"
                  src={computerSts} alt='different versions of the word computer' /> To show which part of a
                  word is the strongest, some dictionaries show the stressed syllable with bold or capitalized letters.
                  Other dictionaries use a mark to show stress, but the mark might be in front of, or after, or on top of it.</p>
              </div>
              <div className='exampleDiv1'>
                <p className='tipParag'><span className="exampleStart">Example Two: Vowel Sounds<br /></span><img className="tipImg"
                  src={LongA} alt='different representations of long A' />There are different systems for the
                  vowel sounds. This image shows some of the common symbols used to represent the sound of "A" ​in a word such as
                  “name.” This vowel is also known as "Long-A."</p>
              </div>
            </div>
            <p className='tipParag'>Dictionaries have a guide to explain what the symbols mean. If you have a book-dictionary,
              the guide is usually located somewhere in the introductory pages at the front of the book.</p>
            <p className='tipParag'><em><strong>So be careful! </strong></em> You need to understand the symbols so that you
              don't get mixed up.</p>
          </div>

          <div className="topten" id="tip2">
            <h4 className='tipTitle'>TIP #2 ~ WATCH YOUR FACE!</h4>
            <p className='tipParag'>If you learn to move your mouth and face the way that an English speaker does, it can help
              you start to sound more natural in English.</p>
            <p className='tipParag'><span className="exampleStart">TRY THIS: </span>Watch videos to observe how native English
              speakers move their mouth and face. First, watch a news reporter, but with the sound off. Pay attention
              to how the reporter's mouth and face move. Then watch a news reporter in your language (with the sound off)
              to see the difference. Spend some time observing the differences. After that watch reporters with the sound on,
              so you can start connecting the sounds of English with the facial movements. (You could also try video-recording
              yourself to see how your face looks when you speak English.)</p>
            <p className='tipParag'>Some common problems that I see are:</p>
            <p className='tipParagInset'><span className="exampleStart">A tense jaw: </span>Some students do not open their mouth
              wide enough for clear English. Others seem to have a jaw that does not want to move freely.</p>
            <p className='tipParagInset'><span className="exampleStart">Hiding the teeth: </span> Some students are not
              comfortable letting their tongue or teeth be visible. However, it is difficult to pronounce English well if
              you try to keep your teeth or tongue hidden.</p>
            <p className='tipParag'><span className="exampleStart">KEEP IN MIND: </span>In English, the tongue, the face, and also
              the voice are all quite active.</p>
          </div>

          <div className="topten" id="tip3">
            <h4 className='tipTitle'>TIP #3 ~ REVERSE IMITATION</h4>
            <p className='tipParag'>Listen to English speakers trying to speak your language. What kind of mistakes do they
              usually make when they speak your language?</p>
            <ul className='myUlList'>
              <li>Do they slide around too much on vowel sounds? </li>
              <li>Do they make their voice sing too much, or too little?</li>
              <li>Do they articulate some consonants too strongly or too weakly?</li>
              <li>Do they use a funny-sounding rhythm?</li>
            </ul>
            <p className='tipParag'>The “foreign” sound that English speakers typically make while speaking your language can
              give you some clues about how you should try to sound when you speak English.</p>
            <p className='tipParag'><span className="subtitle">Here is a simple example: </span></p>
            <p className='tipParagInset'>The sound of "B" in English uses stronger lip pressure than a "B" in Spanish, so
            English speakers often speak Spanish with a "B" that sounds too heavy or forceful. However, a Spanish
            speaker who wants to sound good when they speak English should try to imitate that heavier "B" sound in
              order to sound better in English. </p>
          </div>

          <div className="topten" id="tip4">
            <h4 className='tipTitle'>TIP #4 ~ EXAGGERATE!</h4>
            <p className='tipParag'>​Some aspects of English pronunciation may feel strange or difficult when you first
            try them. Often, these are the things that require extra effort to learn. But, keep in mind that when
            something feels very different or very new for you, it can seem like you are making a really big change in
              your speaking patterns, yet ironically, it is sometimes not enough. So, even though it <em>feels</em> like
              a big effort, you may not yet be saying it clearly enough or strongly enough.</p>
            <p className='tipParag'>I have seen this many times. I have seen students try something new with their
            English pronunciation, but the new sound is very weak -- it is only just a little bit different from the
            way they were saying it before. They feel like they have produced a big change, but it doesn't really
              sound so big. So, I tell them to try to exaggerate -- to try to say the new sound <em>too</em> strongly.
              Then, when they do that, it usually sounds just right.</p>
            <p className='tipParag'>It is often good to exaggerate a bit when you are learning to pronounce difficult
            things in English because you need to train your mouth muscles, or your voice, or your breathing muscles,
              to do new things and create new habits. It is an important key to practicing well.</p>
            <p className='tipParag'>When you learn new ways, it can feel very different. It may feel strange – but that's ok!</p>
            <p className="tipParag"><strong>Be brave! Be bold! Go ahead: <em>EXAGGERATE!!!</em></strong></p>
          </div>

          <div className="topten" id="tip5">
            <h4 className='tipTitle'>TIP #5 ~ REPETITION</h4>
            <p className='tipParag'>Repetition, or frequent practice, is very important when you are learning new
            pronunciation patterns, because you are training and strengthening your speech muscles. This is similar to
            an athlete training their body, or a pianist training their fingers. They will not improve very quickly if
              they train or practice just once per week.</p>
            <p className='tipParag subtitle'>Here are some guidelines:</p>
            <ol className='myUlList'>
              <li className='tipParag'>It is best to practice a little bit <em>every</em> day (or even twice a day).</li>
              <li className='tipParag'>Just 10 minutes every day is better than an hour or two just once per week.</li>
            </ol>
            <p className='tipParag subtitle'><strong>SOME IDEAS FOR PRACTICE</strong></p>
            <ul className='myUlList'>
              <li className='tipParag'>Listen to and imitate a news reporter.</li>
              <li className='tipParag'>Find a brief conversation in a movie or video - repeat it over and over until you can
                say it simultaneously.</li>
              <li className='tipParag'>Get an audio book along with a hard copy of the book, and try to read along out loud
                with the narrator.</li>
            </ul>
          </div>

          <div className="topten" id="tip6">
            <h4 className='tipTitle'>TIP #6 ~ BEGIN EARLY!</h4>
            <p className='tipParag'>The best time to focus on pronunciation is sooner rather than later. If you train your mouth
              correctly when you begin, then you will not have to unlearn bad habits and relearn good pronunciation later.</p>
            <p className='tipParag'>If you can already speak English, but your pronunciation is your weak point, then you will
            need to be patient and persistent. Integrating new pronunciation patterns into your speaking will probably
              take some time.</p>
            <p className='tipParag subtitle'><strong>STAGES IN PRONUNCIATION DEVELOPMENT</strong></p>
            <p className='tipParagInset'>Level 1: awareness of a new sound or pattern<br />
              Level 2: ability to hear or detect the new sound or pattern in the normal flow of speech<br />
              Level 3: ability to correctly produce the new sound in a single word or short phrase<br />
              Level 4: ability to maintain control in a sentence or simple dialogue<br />
              Level 5: ability to integrate it accurately into everyday speaking</p>
            <p className='tipParag'>Moving from one level to the next usually gets harder the higher you go. Going from Level
            1 to Level 2 can happen quite quickly and easily. Then, depending on your first language and the particular
            aspect of pronunciation you are working on, it may or may not be easy to get to Level 3. It is harder to
            get to Level 4, and reaching Level 5 requires a lot practice and self-discipline. Keep this in mind so that
              you don't get discouraged!</p>
          </div>

          <div className="topten" id="tip7">
            <h4 className='tipTitle'>TIP #7 ~ STUDY THE VOWELS</h4>
            <p className='tipParag'>Almost all students of English have some kind of difficulty with vowel sounds. That is
            because there are 15 different vowel sounds in English, BUT there are only 5 written letters to spell the 15
              different sounds, so it can be very confusing.</p>
            <p className='tipParag'>There are two VERY important things to know about English vowels...</p>
            <p className='tipParag'><span className="exampleStart">FIRST: </span>One secret to success is knowing that each vowel
              letter has 2 or 3 different sounds that it normally uses. Each vowel letter has at least one "Long-vowel"
              sound, at least one "Short-vowel" sound, and it also has a weak sound. After you know what the normal sounds
              are for each vowel letter, then you can start to learn when to use the different sounds.</p>
            <p className='tipParag subtitle'><span className="exampleStart">SECOND: </span>Another really important key is knowing about
              the two main types of vowels:</p>
            <p className='tipParagInset'>1) The "Long-vowel" sounds require a very active tongue because they have 2 parts.</p>
            <p className='tipParagInset'>2) The "Short-vowel" sounds need to be pronounced with a relaxed tongue (this may be
            something new for your tongue!)</p>
          </div>

          <div className="topten" id="tip8">
            <h4 className='tipTitle'>TIP #8 ~ FIND YOUR SPECIAL CONSONANTS</h4>
            <p className='tipParag'>English consonants are usually less difficult than the vowels. Most students pronounce
            most consonants well. But often, one or two are difficult because of a difference
            between English and your first language. So, the best strategy is to figure out which ones are
              difficult for you.</p>
            <p className="tipParag"><span className="exampleStart">Some examples: </span>Many Spanish speakers
              confuse English "B" and "V", Koreans often mix up "F" and "P", many Arabic and Somali speakers confuse "P"
              and "B", and "W" and "V" for people who speak Russian or Tamil. These errors could cause some confusion or
              funny mix-ups! For example, if you struggle with "F" vs. "P", the word "coffee" could sound like "copy". Or
              if you confuse "W" and "V", "west" might sound like "vest".</p>
            <p className='tipParag subtitle'><strong>DIFFICULT CONSONANTS FOR ALMOST EVERYONE: R & TH</strong></p>
            <p className='tipParag'><span className="exampleStart">The R sound: </span>This is difficult for many students
              because English R is somewhat unusual – it sounds almost like a vowel. (And it does act as a
              vowel sometimes!) The best advice to pronounce R well is: the tip of the tongue should NOT move or touch the
              top of the mouth when you say it. <a href='https://pronunciationcoach.blog/2011/10/28/the-sound-of-r/' target='_blank'
                rel='noopener noreferrer' className='shadowA'>&#129130;&nbsp;See blog post: The Sound of&nbsp;R</a></p>
            <p className='tipParag'><span className="exampleStart">The TH sound: </span>This is difficult for many English
              learners, but since it is frequently mispronounced, it doesn't usually cause big problems. But if your goal is
              to speak English super well, you should work on TH. <a href='https://pronunciationcoach.blog/2010/12/06/th-part-1-dont-be-shy/' target='_blank'
                rel='noopener noreferrer' className='shadowA'>&#129130;&nbsp;See blog post: TH Part 1. Dont' Be Shy!</a></p>
          </div>

          <div className="topten" id="tip9">
            <h4 className='tipTitle'>TIP #9 ~ MASTER THE FREQUENT WORDS</h4>
            <p className='tipParag'>Be careful with the most frequently used words -– make sure that you are saying these
              words right. You need to use them every time you speak English!</p>
            <p className='tipParagInset'><span className="exampleStart">Beginners: </span> If you are a beginner, make sure you
              know how to say these words correctly now, so that you don't have to fix them later.</p>
            <p className='tipParagInset'><span className="exampleStart">Non-beginners: </span> If you started learning English
              years ago, you may have learned some of the most frequent words incorrectly when you first started, and so
              you probably have been practicing saying them the wrong way for a long time. That means it might take some
              extra effort to correct the way that you say them.</p>
            <p className='tipParag'><span className="exampleStart">IMPORTANT NOTE: </span>Among the 100-200 most frequently used
              words of English, there is a higher percentage of unusual spellings. So if you try to say them based on the
              way they look, you have a higher chance of pronouncing them incorrectly. This is why you need to check, and
              then memorize, the way that these words should sound.</p>
            <p className='tipParag'><span className="exampleStart"><em>Check yourself! </em></span>
              <a href='https://pronunciationcoach.blog/2011/10/10/the-most-frequently-used-words/' target='_blank' rel='noopener noreferrer'
                className='shadowA'>&#129130;&nbsp;Listen to this audio</a> of the 150 most frequently used words of English.</p>
          </div>

          <div className="topten" id="tip10">
            <h4 className='tipTitle'>TIP #10 ~ LISTEN TO THE MUSIC</h4>
            <p className='tipParag'>Have you ever heard someone speaking a language that you do not know, but you could
            guess which language it was? Perhaps you thought: "That sounds like French" or "I
            think they are speaking Russian" or "That must be Chinese". Many people can recognize other languages, even
              if they do not understand a single word of the conversation. But, How?</p>
            <p className='tipParag'>Part of the reason is that each language has it's own special sound, or "music." The
            musical part comes from the rhythm of the words, the stress patterns, and the intonation patterns. Learning
              to imitate the "music" of English will help you sound much more natural, and even easier to understand.</p>
            <p className='tipParag subtitle'><strong>THE "MUSIC" OF ENGLISH:</strong></p>
            <p className='tipParag'>English has very active "music" patterns, with strong slower words and weak faster words,
            and high notes and low notes in each sentence. Listen for this when you listen to English, and
              try to imitate it.</p>
            <p className='tipParag'><span className="exampleStart"><em>Be ready! </em></span>It may feel strange. English may feel
              louder and noisier than you are accustomed to. But, do your best, because if you do not use adequate levels of "music" in
              English, it could make you sound like you are bored, or boring, or sleepy, or sad, or not very smart. However,
              using sufficient "music" in English can help make you sound like you are somebody who is friendly, positive,
              and intelligent.</p>
          </div>

        </div>

      </section>


    </>);
  }
}

export default TopTen;
