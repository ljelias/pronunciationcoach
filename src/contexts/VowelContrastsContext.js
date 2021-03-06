import React, { createContext, Component } from 'react';

export const VowelContrastsContext = createContext();

class VowelContrastsContextProvider extends Component {
  state = { 
    longOShortO: {
      titleA: 'Long-O vs. Short-o',
      titleB: '"Coast" or "Cost"?',
      instructions: 'In the word pairs below, the first word has a Long-O sound (like in "coast") and the second word has a Short-o sound (like in "cost"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Long-O sound (like in "coast") and the second word has a Short-o sound (like in "cost").',
      quizAudio: 'longOShortOTest',
      practiceAudio: 'longOShortOPairs',
      vowelNotes: ['Long-O has 2 parts: /ow/', 'Long-O uses rounded lips', 'Short-o sounds like the [a] in "mama"', 'Short-o doe NOT use rounded  lips', 'in "clothe" the [th] is voiced', 'in "cloth" the [th] is voiceless'],
      blogLesson: 'https://pronunciationcoach.blog/2012/10/29/long-o-vs-short-o/',
      blogLessonTitle: 'Long-O vs. Short-o',
      OneA: 'soak',
      OneB: 'sock',
      OneAns: 'soak',
      TwoA: 'robe',
      TwoB: 'rob',
      TwoAns: 'rob',
      ThreeA: 'goat',
      ThreeB: 'got',
      ThreeAns: 'goat',
      FourA: 'own',
      FourB: 'on',
      FourAns: 'own',
      FiveA: 'coat',
      FiveB: 'cot',
      FiveAns: 'coat',
      SixA: 'hoping',
      SixB: 'hopping',
      SixAns: 'hopping',
      SevenA: 'toast',
      SevenB: 'tossed',
      SevenAns: 'toast',
      EightA: 'clothe',
      EightB: 'cloth',
      EightAns: 'clothe',
      NineA: 'holy',
      NineB: 'holly',
      NineAns: 'holly',
      TenA: 'oaks',
      TenB: 'ox',
      TenAns: 'oaks',
      ElevenA: 'rode',
      ElevenB: 'rod',
      ElevenAns: 'rod',
      TwelveA: 'cloak',
      TwelveB: 'clock',
      TwelveAns: 'clock'
    },
    longAShortE: {
      titleA: 'Long-A vs. Short-e',
      titleB: '"Sale" or "Sell"?',
      instructions: 'In the word pairs below, the first word has a Long-A sound (like in "sale") and the second word has a Short-e sound (like in "sell"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Long-A sound (like in "sale") and the second word has a Short-e sound (like in "sell").',
      quizAudio: 'longAShortETest',
      practiceAudio: 'longAShortEPairs',
      vowelNotes: ['Long-A and Short-e are in the same place in the mouth','Long-A has two parts: /ey/', 'The tongue must be relaxed for Short-e'],
      blogLesson: 'https://pronunciationcoach.blog/2012/03/14/sell-or-sale/',
      blogLessonTitle: 'Sell or Sale?',
      OneA: 'raid',
      OneB: 'red',
      OneAns: 'raid',
      TwoA: 'lace',
      TwoB: 'less',
      TwoAns: 'lace',
      ThreeA: 'tale',
      ThreeB: 'tell',
      ThreeAns: 'tell',
      FourA: 'pain',
      FourB: 'pen',
      FourAns: 'pen',
      FiveA: 'gate',
      FiveB: 'get',
      FiveAns: 'gate',
      SixA: 'rake',
      SixB: 'wreck',
      SixAns: 'wreck',
      SevenA: 'taste',
      SevenB: 'test',
      SevenAns: 'test',
      EightA: 'age',
      EightB: 'edge',
      EightAns: 'age',
      NineA: 'laid',
      NineB: 'led',
      NineAns: 'laid',
      TenA: 'date',
      TenB: 'debt',
      TenAns: 'date',
      ElevenA: 'jail',
      ElevenB: 'gel',
      ElevenAns: 'jail',
      TwelveA: 'braid',
      TwelveB: 'bread',
      TwelveAns: 'bread'
    },
    longEShortI: {
      titleA: 'Long-E vs. Short-i',
      titleB: '"These" or "This"?',
      instructions: 'In the word pairs below, the first word has a Long-E sound (like in "these") and the second word has a Short-i sound (like in "this"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Long-E sound (like in "these") and the second word has a Short-i sound (like in "this").',
      quizAudio: 'longEShortITest',
      practiceAudio: 'longEShortIPairs',
      vowelNotes: ['Long-E and Short-i are in the same place in the mouth','Long-E has two parts: /iy/', 'The tongue must be relaxed for Short-i'],
      blogLesson: 'https://pronunciationcoach.blog/2011/11/26/this-or-these/',
      blogLessonTitle: 'This or These?',
      OneA: 'seeks',
      OneB: 'six',
      OneAns: 'seeks',
      TwoA: 'deed',
      TwoB: 'did',
      TwoAns: 'did',
      ThreeA: 'reach',
      ThreeB: 'rich',
      ThreeAns: 'reach',
      FourA: 'heat',
      FourB: 'hit',
      FourAns: 'hit',
      FiveA: 'wheel',
      FiveB: 'will',
      FiveAns: 'wheel',
      SixA: 'eats',
      SixB: 'it\'s',
      SixAns: 'eats',
      SevenA: 'sleep',
      SevenB: 'slip',
      SevenAns: 'slip',
      EightA: 'wean',
      EightB: 'win',
      EightAns: 'win',
      NineA: 'seat',
      NineB: 'sit',
      NineAns: 'seat',
      TenA: 'steal',
      TenB: 'still',
      TenAns: 'steal',
      ElevenA: 'leafed',
      ElevenB: 'lift',
      ElevenAns: 'lift',
      TwelveA: 'each',
      TwelveB: 'itch',
      TwelveAns: 'itch'
    },
    shortA1ShortA2: {
      titleA: 'Short-a1 vs. Short-a2',
      titleB: '"Tax" or "Talks"?',
      instructions: 'In the word pairs below, the first word has a Short-a1 sound (like in "tax") and the second word has a Short-a2 sound (like in "talks"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Short-a1 sound (like in "tax") and the second word has a Short-a2 sound (like in "talks").',
      quizAudio: 'shortA1ShortA2Test',
      practiceAudio: 'shortA1ShortA2Pairs',
      vowelNotes: ['The tongue must be relaxed for both of these vowels', 'Both vowels are low in the mouth: your jaw should be open', 'Short-a1 is in the front of the mouth', 'Short-a2 is low in the middle', 'Short-a2 uses the same sound as Short-o, so a few of the words in the list are spelled with [o]'],
      blogLesson: 'https://pronunciationcoach.blog/2012/06/08/the-sounds-of-a/',
      blogLessonTitle: 'The Sounds of A',
      OneA: 'stack',
      OneB: 'stalk',
      OneAns: 'stack',
      TwoA: 'cat',
      TwoB: 'caught',
      TwoAns: 'caught',
      ThreeA: 'fan',
      ThreeB: 'fawn',
      ThreeAns: 'fawn',
      FourA: 'wax',
      FourB: 'walks',
      FourAns: 'wax',
      FiveA: 'Al',
      FiveB: 'all',
      FiveAns: 'all',
      SixA: 'pan',
      SixB: 'pawn',
      SixAns: 'pan',
      SevenA: 'add',
      SevenB: 'awed',
      SevenAns: 'awed',
      EightA: 'hack',
      EightB: 'hawk',
      EightAns: 'hack',
      NineA: 'mam',
      NineB: 'mom',
      NineAns: 'mom',
      TenA: 'tack',
      TenB: 'talk',
      TenAns: 'tack',
      ElevenA: 'glass',
      ElevenB: 'gloss',
      ElevenAns: 'gloss',
      TwelveA: 'sad',
      TwelveB: 'sawed',
      TwelveAns: 'sad'
    },
    shortA1ShortE: {
      titleA: 'Short-a1 vs. Short-e',
      titleB: '"Man" or "Men"?',
      instructions: 'In the word pairs below, the first word has a Short-a1 sound (like in "man") and the second word has a Short-e sound (like in "men"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Short-a1 sound (like in "man") and the second word has a Short-e sound (like in "men").',
      quizAudio: 'shortA1ShortETest',
      practiceAudio: 'shortA1ShortEPairs',
      vowelNotes: ['The tongue must be relaxed for both of these vowels', 'Both vowels are in the front of the mouth', 'Short-a1 is low in the front of the mouth: open the jaw, but without tensing the tongue', 'Short-e is in the front of the mouth at mid height'],
      blogLesson: '',
      blogLessonTitle: '',
      OneA: 'bad',
      OneB: 'bed',
      OneAns: 'bed',
      TwoA: 'pan',
      TwoB: 'pen',
      TwoAns: 'pen',
      ThreeA: 'laughed',
      ThreeB: 'left',
      ThreeAns: 'laughed',
      FourA: 'sand',
      FourB: 'send',
      FourAns: 'sand',
      FiveA: 'gas',
      FiveB: 'guess',
      FiveAns: 'gas',
      SixA: 'mat',
      SixB: 'met',
      SixAns: 'met',
      SevenA: 'tan',
      SevenB: 'ten',
      SevenAns: 'tan',
      EightA: 'sad',
      EightB: 'said',
      EightAns: 'sad',
      NineA: 'dance',
      NineB: 'dense',
      NineAns: 'dense',
      TenA: 'band',
      TenB: 'bend',
      TenAns: 'band',
      ElevenA: 'lather',
      ElevenB: 'leather',
      ElevenAns: 'lather',
      TwelveA: 'dad',
      TwelveB: 'dead',
      TwelveAns: 'dead'
    },
    shortEShortI: {
      titleA: 'Short-e vs. Short-i',
      titleB: '"Mess" or "Miss"?',
      instructions: 'In the word pairs below, the first word has a Short-e sound (like in "mess") and the second word has a Short-i sound (like in "miss"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Short-e sound (like in "mess") and the second word has a Short-i sound (like in "miss").',
      quizAudio: 'shortEShortITest',
      practiceAudio: 'shortEShortIPairs',
      vowelNotes: ['The tongue must be relaxed for both of these vowels', 'Both vowels are in the front of the mouth', 'Short-e is in the front of the mouth at mid height', 'Short-i is high in the front of the mouth'],
      blogLesson: '',
      blogLessonTitle: '',
      OneA: 'left',
      OneB: 'lift',
      OneAns: 'lift',
      TwoA: 'well',
      TwoB: 'will',
      TwoAns: 'will',
      ThreeA: 'tent',
      ThreeB: 'tint',
      ThreeAns: 'tent',
      FourA: 'check',
      FourB: 'chick',
      FourAns: 'check',
      FiveA: 'head',
      FiveB: 'hid',
      FiveAns: 'hid',
      SixA: 'gem',
      SixB: 'gym',
      SixAns: 'gym',
      SevenA: 'set',
      SevenB: 'sit',
      SevenAns: 'set',
      EightA: 'desk',
      EightB: 'disk',
      EightAns: 'disk',
      NineA: 'spell',
      NineB: 'spill',
      NineAns: 'spell',
      TenA: 'pet',
      TenB: 'pit',
      TenAns: 'pet',
      ElevenA: 'fell',
      ElevenB: 'fill',
      ElevenAns: 'fill',
      TwelveA: 'better',
      TwelveB: 'bitter',
      TwelveAns: 'better'
    },
    shortOShortU: {
      titleA: 'Short-o vs. Short-u',
      titleB: '"Boss" or "Bus"?',
      instructions: 'In the word pairs below, the first word has a Short-o sound (like in "boss") and the second word has a Short-u sound (like in "bus"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Short-o sound (like in "boss") and the second word has a Short-u sound (like in "bus").',
      quizAudio: 'shortOShortUTest',
      practiceAudio: 'shortOShortUPairs',
      vowelNotes: ['The tongue must be relaxed for both of these vowels', 'Both vowels are in the middle of the mouth: not front, not back', 'Short-u is in the middle of the mouth at mid height', 'Short-o is in the low middle part of the mouth: the jaw is open', 'About the word "gall": Short-o1 uses the same sound as Short-a2'],
      blogLesson: 'https://pronunciationcoach.blog/2012/02/21/boss-or-bus/',
      blogLessonTitle: 'Boss or Bus?',
      OneA: 'otter',
      OneB: 'utter',
      OneAns: 'utter',
      TwoA: 'coddle',
      TwoB: 'cuddle',
      TwoAns: 'coddle',
      ThreeA: 'mock',
      ThreeB: 'muck',
      ThreeAns: 'muck',
      FourA: 'bought',
      FourB: 'butt',
      FourAns: 'bought',
      FiveA: 'soccer',
      FiveB: 'sucker',
      FiveAns: 'sucker',
      SixA: 'nozzle',
      SixB: 'nuzzle',
      SixAns: 'nuzzle',
      SevenA: 'mommy',
      SevenB: 'mummy',
      SevenAns: 'mommy',
      EightA: 'not',
      EightB: 'nut',
      EightAns: 'not',
      NineA: 'gall',
      NineB: 'gull',
      NineAns: 'gull',
      TenA: 'cough',
      TenB: 'cuff',
      TenAns: 'cuff',
      ElevenA: 'song',
      ElevenB: 'sung',
      ElevenAns: 'song',
      TwelveA: 'docked',
      TwelveB: 'duct',
      TwelveAns: 'docked'
    },
    longU2ShortOO: {
      titleA: 'Long-U2(Long-OO) vs. Short-oo',
      titleB: '"Stewed" or "Stood"?',
      instructions: 'In the word pairs below, the first word has a Long-U2 sound (like in "stewed") and the second word has a Short-oo sound (like in "stood"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Long-U2 sound (like in "stewed") and the second word has a Short-oo sound (like in "stood").',
      quizAudio: 'longU2ShortOOTest',
      practiceAudio: 'longU2ShortOOPairs',
      vowelNotes: ['Long-U2 and Long-OO share the same sound', 'Short-oo uses the same place in the mouth, but the tongue must be relaxed', '"who\'d" is short for "who would"', '"could", "would", and "should" have a silent [L]'],
      blogLesson: 'https://pronunciationcoach.blog/2012/05/04/short-oo-whats-that/',
      blogLessonTitle: 'Short-oo? What\'s that?',
      OneA: 'gooed',
      OneB: 'good',
      OneAns: 'gooed',
      TwoA: 'Luke',
      TwoB: 'look',
      TwoAns: 'Luke',
      ThreeA: 'cooed',
      ThreeB: 'could',
      ThreeAns: 'could',
      FourA: 'fool',
      FourB: 'full',
      FourAns: 'full',
      FiveA: 'suit',
      FiveB: 'soot',
      FiveAns: 'suit',
      SixA: 'wooed',
      SixB: 'would',
      SixAns: 'would',
      SevenA: 'nuke',
      SevenB: 'nook',
      SevenAns: 'nuke',
      EightA: 'who\'d',
      EightB: 'hood',
      EightAns: 'hood',
      NineA: 'pool',
      NineB: 'pull',
      NineAns: 'pool',
      TenA: 'shooed',
      TenB: 'should',
      TenAns: 'should',
      ElevenA: '--',
      ElevenB: '--',
      ElevenAns: '--',
      TwelveA: '--',
      TwelveB: '--',
      TwelveAns: '--'
    },
    shortUShortOO: {
      titleA: 'Short-u vs. Short-oo',
      titleB: '"Buck" or "Book"?',
      instructions: 'In the word pairs below, the first word has a Short-u sound (like in "buck") and the second word has a Short-oo sound (like in "book"). On the audio, you will hear just one of the two words -- which word is it?',
      practiceInfo: 'In the word pairs below, the first word has a Short-u sound (like in "buck") and the second word has a Short-oo sound (like in "book").',
      quizAudio: 'shortUShortOOTest',
      practiceAudio: 'shortUShortOOPairs',
      vowelNotes: ['The tongue must be relaxed for both of these vowels', 'Short-u is in the middle of the mouth at mid height', 'Short-oo is in the upper back part of the mouth, with a RELAXED tongue', 'Some frequently used words with Short-oo: "put", "push", "sugar", "cookie", "should", "could", "would", "wood", "woman", "cook", "look", "good", "book", "took"'],
      blogLesson: '',
      blogLessonTitle: '',
      OneA: 'stud',
      OneB: 'stood',
      OneAns: 'stood',
      TwoA: 'huff',
      TwoB: 'hoof',
      TwoAns: 'huff',
      ThreeA: 'putt',
      ThreeB: 'put',
      ThreeAns: 'putt',
      FourA: 'luck',
      FourB: 'look',
      FourAns: 'look',
      FiveA: 'cud',
      FiveB: 'could',
      FiveAns: 'cud',
      SixA: 'rough',
      SixB: 'roof',
      SixAns: 'rough',
      SevenA: 'tuck',
      SevenB: 'took',
      SevenAns: 'took',
      EightA: 'rut',
      EightB: 'root',
      EightAns: 'rut',
      NineA: 'Huck',
      NineB: 'hook',
      NineAns: 'hook',
      TenA: 'pus',
      TenB: 'puss',
      TenAns: 'puss',
      ElevenA: '--',
      ElevenB: '--',
      ElevenAns: '--',
      TwelveA: '--',
      TwelveB: '--',
      TwelveAns: '--'
    }
  }
  render() { 
    return ( 
      <VowelContrastsContext.Provider value={{...this.state}}>
        {this.props.children}
      </VowelContrastsContext.Provider>
     );
  }
}
 
export default VowelContrastsContextProvider;