import React from 'react';
import './Carousel.scss';

const Carousel = () => {
    return (
        <div className='carouselContainer'>
            <div className='carousel-content'>
                <p className='carousel-content__subtitle'>
                    La mejor cálidad en plantas
                </p>
                <h1 className='carousel-content__title'> 
                    Más de 12 años de experiencia
                </h1>
                <button className='carousel-content__button'>
                    COMPRAR AHORA
                </button>
            </div>
        </div>
    )
}

export default Carousel;