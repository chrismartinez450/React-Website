import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Christopher Martinez</h1>
      <p>Bachelor's of Science in Computer Science</p>
      <p>Graduation Date: December 2021</p>
    </div>
  );
}
export default HeroSection;
