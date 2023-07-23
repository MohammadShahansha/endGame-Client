import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
// import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import img5 from '../../../assets/images/img5.jpg'
import img6 from '../../../assets/images/img6.jpg'

const GraduateGallary = () => {
    return (
        <div>
            <h2 className='font-bold text-5xl text-[--text-color] text-center py-5'>Graduation <span className='text-[--main-color]'>Gallery</span></h2>
            <Carousel>
                <div>
                    <img className='opacity-70' src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className='opacity-70' src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className='opacity-70' src={img4} />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img className='opacity-70' src={img5} />
                    {/* <p className="legend">Legend 5</p> */}
                </div>
                <div>
                    <img className='opacity-70' src={img6} />
                    {/* <p className="legend">Legend 6</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default GraduateGallary;