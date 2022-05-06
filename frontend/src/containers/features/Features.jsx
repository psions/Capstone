import React from 'react';
import Feature from '../feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'A SURPRISE EVERY MONTH',
    text: 'New loot boxes sent out every month with new gaming gadgets'
  },
  {
    title: 'FAST DELIVERY',
    text: 'New loot boxes sent out every month with new gaming gadgets'
  },
  {
    title: 'DELIVERED TO YOUR DOOR',
    text: 'New loot boxes sent out every month with new gaming gadgets'
  },
  {
    title: 'EXCLUSIVE LOOT',
    text: 'New loot boxes sent out every month with new gaming gadgets'
  },
]



const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Your Future Gaming Experience Starts Today</h1>
        <p>Request Different Loot Boxes Now</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features