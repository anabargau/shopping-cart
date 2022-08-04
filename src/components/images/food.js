import uniqid from 'uniqid';
import food1 from './food1.webp';
import food2 from './food2.webp';
import food3 from './food3.jpg';
import food4 from './food4.jpg';
import food5 from './food5.jpg';
import food6 from './food6.webp';
import food7 from './food7.jpeg';
import food8 from './food8.webp';
import food9 from './food9.jpg';
import food10 from './food10.jpeg';

const food = [
  {
    type: 'food',
    id: uniqid(),
    src: food1,
    price: '20$',
    title: 'High quality dog food',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food2,
    price: '15$',
    title: 'Random food',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food3,
    price: '16$',
    title: 'Filet Mignon for the small ones',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food4,
    price: '17$',
    title: 'Yummy labrador food',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food5,
    price: '10$',
    title: 'Delicious cat food',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food6,
    price: '12$',
    title: 'Whiskas for kittens',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food7,
    price: '7$',
    title: 'Fishy food',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food8,
    price: '19$',
    title: 'Small cute rabbit food',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food9,
    price: '5$',
    title: 'Healthy food for your rodents',
  },
  {
    type: 'food',
    id: uniqid(),
    src: food10,
    price: '3$',
    title: 'Adult iguana food',
  },
];

export default food;
