import React from 'react';
import Carousel from 'react-multi-carousel' 
import 'react-multi-carousel/lib/styles.css';
import Slide1 from '../../assets/slide1.jpg';
import Slide2 from '../../assets/slide2.jpg';
import Slide3 from '../../assets/slide3.jpg';


const Home = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <div id="slideshow">
            <div id = "carousel">
                <Carousel 
                    responsive={responsive} 
                    additionalTransfrom={0}
                    arrows
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="menu-grid"
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="image-item"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable>
                    <div className="slide">
                        <img className="slide-image" src={Slide1} alt='Slide 1' />
                    </div>
                    <div className="slide">
                        <img className="slide-image" src={Slide2} alt='Slide 2' />
                    </div>
                    <div className="slide">
                        <img className="slide-image" src={Slide3} alt='Slide 3' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Home;