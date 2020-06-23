import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5500,
    autoplaySpeed: 500,
    cssEase: "linear"
} 

const SliderWidget = ({slides}) => {
    return slides ?
    <Slider {...settings}>
        {slides.map(item =>(
            <div key={item.id}>
                <div
                    className="item_slider"
                    style={{
                        background:`url(/images/covers/${item.cover})`
                    }}
                >
                    <div className="caption">
                        <h4>{item.topic}</h4>
                        <p>{item.title}</p>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
    :null;
}

export default SliderWidget;
