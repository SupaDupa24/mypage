import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'assets/slide_1.jpg',
  'assets/slide_2.jpg',
  'assets/slide_3.png'
];

export class SlideShow extends React.Component{
  constructor(){
    super();
    this.state={defautProps:fadeImages[0]};
  }



    render() {
  return (
    <div className="slide-container">
      <Fade infinite='true' canSwipe='true'>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt='fade' />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt='fade' />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt='fade' />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  );
}
}