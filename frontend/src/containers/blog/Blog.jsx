import React from 'react';
import {Article} from '../../containers';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>See What Others Are Saying</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="may 4th, 2022" title="The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth."/>
        </div>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="may 4th, 2022" title="The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth."/>
          <Article imgUrl={blog03} date="may 4th, 2022" title="The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth."/>
          <Article imgUrl={blog04} date="may 4th, 2022" title="The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth."/>
          <Article imgUrl={blog05} date="may 4th, 2022" title="The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth."/>
        </div>
      </div>
    </div>
  )
}

export default Blog