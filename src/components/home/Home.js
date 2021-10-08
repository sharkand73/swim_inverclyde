import React from 'react';
import AwesomeSlider from 'react-awesome-slider'; 
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import Slide1 from '../../assets/slide1.jpg';
import Slide2 from '../../assets/slide2.jpg';
import Slide3 from '../../assets/slide3.jpg';

const Slider = withAutoplay(AwesomeSlider);

const Home = () => {

    return (
        <div id="slideshow">
            <div id = "carousel">
                <Slider
                play
                infinite
                transitionDelay = {2000}
                bullets={false}
                >
                    <div className="slide">
                        <img className="slide-image" src={Slide1} alt='Slide 1' />
                    </div>
                    <div className="slide">
                        <img className="slide-image" src={Slide2} alt='Slide 2' />
                    </div>
                    <div className="slide">
                        <img className="slide-image" src={Slide3} alt='Slide 3' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Home;