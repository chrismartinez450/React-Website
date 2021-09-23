import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Spearfishingcards() {
  return (
        <div className='cards'>
          <h1>Check out these EPIC catches!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/halibut.jpg'
                  text='My first ever HALIBUT!'
                  path='/'
                />
                <CardItem
                  src='images/corbina.jpg'
                  text='My first ever CORBINA!'
                  path='/'
                />
                <CardItem
                  src='images/octopusStill.jpg'
                  text='An octopus interaction!(Video)'
                  path='/'
                />
              </ul>
            </div>
          </div>
        </div>
      );
    }

export default Spearfishingcards;
