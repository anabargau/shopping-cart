import uniqid from 'uniqid';
import clean1 from './clean1.jpg';
import clean2 from './clean2.webp';
import clean3 from './clean3.webp';
import clean4 from './clean4.webp';
import clean5 from './clean5.png';
import clean6 from './clean6.webp';
import clean7 from './clean7.webp';
import clean8 from './clean8.webp';
import clean9 from './clean9.webp';
import clean10 from './clean10.jpg';

const clean = [
  {
    type: 'clean',
    id: uniqid(),
    src: clean1,
    price: '3$',
    title: 'Nice fur brush',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean2,
    price: '13$',
    title: 'Even nicer double fur brush',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean3,
    price: '25$',
    title: 'Green apple shampoo',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean4,
    price: '70$',
    title: 'Shampoo for happy poodles',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean5,
    price: '4$',
    title: 'Shampoo for shiny cat fur',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean6,
    price: '22$',
    title: 'Best pet shampoo',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean7,
    price: '29$',
    title: 'Expensive nail clippers',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean8,
    price: '30$',
    title: 'Litter box for even the smallest kittens',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean9,
    price: '50$',
    title: 'Pink litter box sand',
  },
  {
    type: 'clean',
    id: uniqid(),
    src: clean10,
    price: '3$',
    title: 'A towel made especially for pets',
  },
];

export default clean;
