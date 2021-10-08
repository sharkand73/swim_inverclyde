import React from 'react';
import AwesomeSlider from 'react-awesome-slider'; 
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';
import Slide3 from '../assets/slide3.jpg';

const Slider = withAutoplay(AwesomeSlider);

const Home = () => {

    return (
        <div className="container">
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
                <div className="slideshow-footer">
                    <div></div>
                </div>
                <div id="founded">
                    <p>
                        Inverclyde Masters Swim Club was created in 1995 out of a number of adults who had swum and trained on a regular basis over a number of years, prior to 
                        that date, with our present Coach Donald Muirhead.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;