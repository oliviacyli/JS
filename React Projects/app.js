import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const background = (
  <img 
    class='background' 
    alt='ocean'
    src='/images/ocean.jpg' 
  />
);

let images = [];
for (const animal in animals) {
  images.push(<img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
  />)
};

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title} </h1>
    {background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
);

function displayFact(e) {
  let selectedAnimal = animals[e.target.alt];
  let randomIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  let funFact = selectedAnimal.facts[randomIndex];
  document.getElementById('fact').innerHTML = funFact;
}

ReactDOM.render(animalFacts, document.getElementById('root'));
