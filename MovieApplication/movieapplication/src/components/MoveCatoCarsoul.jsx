import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import DCLogo from '../assets/SecondMovieCar/DCLogo.png';
import dreamLogo from '../assets/SecondMovieCar/dreamworklogo.jpeg';
import pixarlogo from '../assets/SecondMovieCar/pixarlogo.jpg';
import disneylogo from '../assets/SecondMovieCar/disneylogo.jpg';
import MarvelLogo from '../assets/SecondMovieCar/marvellogo.png';
import LionsGateLogo from '../assets/SecondMovieCar/lionsgalelogo.jpg';
import foxlogo from '../assets/SecondMovieCar/foxlogo.webp';
import sonylogo from '../assets/SecondMovieCar/sonylogo.webp';
import DCHover from '../assets/SecondMovieCar/videos/dcnovie.mp4';
import dreamHover from '../assets/SecondMovieCar/videos/dreamworks.mp4';
import pixarHover from '../assets/SecondMovieCar/videos/y2mate.com - pixar intro but the lamp is angry_1080p.mp4';
import disneyHover from '../assets/SecondMovieCar/videos/disney.mp4';
import MarvelHover from '../assets/SecondMovieCar/videos/marvel.mp4';
import LionsGateHover from '../assets/SecondMovieCar/videos/liongate.mp4';
import foxHover from '../assets/SecondMovieCar/videos/fox.mp4';
import sonyHover from '../assets/SecondMovieCar/videos/y2mate.com - Sony Pictures  Intro Logo Ultra HD_1080p.mp4';

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const CompaniesLogos = [
        { image: DCLogo, video: DCHover },
        { image: dreamLogo, video: dreamHover },
        { image: pixarlogo, video: pixarHover },
        { image: disneylogo, video: disneyHover },
        { image: MarvelLogo, video: MarvelHover },
        { image: LionsGateLogo, video: LionsGateHover },
        { image: foxlogo, video: foxHover },
        { image: sonylogo, video: sonyHover },
    ];

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full px-4 py-24 sm:py-8">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="hidden lg:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={CompaniesLogos.length} visibleSlides={4} step={1} infinite={true}>
                    <div className="relative flex items-center justify-center w-full">
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="flex items-center justify-start h-full transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14">
                                    {CompaniesLogos.map((logo, index) => (
                                        <Slide index={index} key={index}>
                                            <div 
                                                className="relative flex flex-shrink-0 w-full sm:w-auto"
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                {hoveredIndex === index ? (
                                                    <video src={logo.video} autoPlay loop className="object-cover object-center w-full" muted/>
                                                ) : (
                                                    <img src={logo.image} alt={`Company logo ${index}`} className="object-cover object-center w-full" />
                                                )}
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
