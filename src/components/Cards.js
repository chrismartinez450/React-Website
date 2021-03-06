import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check it out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/resume.jpg'
              text='Resumé (Contains contact info)'
              path='/resume'
            />
            <CardItem
              src='images/spearfishinglogo.jpg'
              text='My spearfishing adventures!'
              path='/spearfishing'
            />      
            <CardItem
              src='images/img-3.jpg'
              text='All my links'         
              path='/links'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
