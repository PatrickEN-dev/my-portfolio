import Polyglot from 'node-polyglot';

interface Phrases {
  [key: string]: { [key: string]: string };
}

const phrases: Phrases = {
  en: {
    'Front-end': 'Front-end',
    'Back-end': 'Back-end',
    'Full-Stack': 'Full-Stack',
  },
};

const polyglot = new Polyglot({ phrases, locale: 'en' });

export default polyglot;

