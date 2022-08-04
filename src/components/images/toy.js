import uniqid from 'uniqid';
import toy1 from './toy1.jpg';
import toy2 from './toy2.jpg';
import toy3 from './toy3.jpg';
import toy4 from './toy4.webp';
import toy5 from './toy5.webp';
import toy6 from './toy6.jpeg';
import toy7 from './toy7.jpeg';
import toy8 from './toy8.jpeg';
import toy9 from './toy9.webp';
import toy10 from './toy10.webp';

const toy = [
  {
    type: 'toy',
    id: uniqid(),
    src: toy1,
    price: '2$',
    title: 'Macaron-like balls',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy2,
    price: '5$',
    title: 'Colorful bone',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy3,
    price: '16$',
    title: 'Yellow silly llama',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy4,
    price: '7$',
    title: 'Another colorful bone',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy5,
    price: '19$',
    title: 'Some corn on the cob',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy6,
    price: '12$',
    title: 'Funny pink monkey',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy7,
    price: '20$',
    title: 'Colorful shiny fish',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy8,
    price: '19$',
    title: 'Mice duo',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy9,
    price: '5$',
    title: 'Weirdly realistic fish',
  },
  {
    type: 'toy',
    id: uniqid(),
    src: toy10,
    price: '3$',
    title: 'Fishing pole',
  },
];

export default toy;
