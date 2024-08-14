import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { carouselData } from '../../config/homeCarouselData';

const HomeCarousel = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 5000); 

        return () => clearInterval(timer); 
    }, []);
    
    function handleNext (){
        setCurrentItemIndex(pv=>pv===carouselData.length-1?0:pv+1);
    };

    function handlePrev() {
        setCurrentItemIndex(pv=>pv===0?carouselData.length-1:pv-1);
    };

    return (
        <div className='flex justify-center mt-5 items-center'>
            <span onClick={handlePrev} className='w-6 lg:w-10 ml-2 lg:ml-5 h-6 lg:h-10 rounded-full bg-gray-600/50 hover:bg-white transition-all cursor-pointer text-sm lg:text-2xl font-bold text-center'>
                &lt;
            </span>

            <div className='h-[85vh] lg:mx-3 mx-1 relative w-[90vw] overflow-hidden'>
                <div
                    className=' h-full transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${currentItemIndex * 100}%)` }}
                >
                    {carouselData.map((carousel, index) => (
                        <div
                            style={{ left: `${index * 100}%` }}
                            key={index}
                            className="absolute w-full h-full bg-[url('/public/images/home-bg.jpg')] bg-cover bg-center shadow-2xl"
                        >
                            <div className='bg-gray-600/50 shadow-inner flex flex-col justify-center h-full lg:p-10 p-5 px-3 rounded '>
                            <h5 className="mb-2 lg:mb-6 text-2xl lg:text-5xl font-bold tracking-tight text-gray-400">
                                    {carousel.title}
                                </h5>
                                <p className="mb-3 text-gray-200 bg-[#b4444a9f] p-4 rounded font-semibold lg:text-2xl">
                                    {carousel.details}
                                </p>
                                <Link className='bg-[#b4444a] hover:bg-transparent transition-all hover:border-[#b4444a] border-2 border-gray-700 w-fit text-gray-200 p-3 px-5 my-2' to={carousel.btnSrc}>
                                    {carousel.btnName}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <span onClick={handleNext} className='w-6 lg:w-10 mr-2 lg:mr-5 h-6 lg:h-10 rounded-full bg-gray-600/50 hover:bg-white transition-all cursor-pointer text-sm lg:text-2xl font-bold text-center'>
                &gt;
            </span>
        </div>
    );
};

export default HomeCarousel;
