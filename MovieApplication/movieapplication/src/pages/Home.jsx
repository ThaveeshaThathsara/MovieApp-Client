import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avanges from '../assets/Images/avanges.jpg';
import batman from '../assets/Images/batman.jpg';
import spiderman from '../assets/Images/spiderman.jpg';
import joker from '../assets/Images/joker.jpg';
import pool from '../assets/Images/pool.jpg';
import conjuring from '../assets/Images/conjuring.jpg';
import wick from '../assets/Images/wick.jpg';
import batmanVid from '../assets/Videos/batm,an.mp4'
import spidermanVid from '../assets/Videos/spiderman.mp4'
import jokerVid from '../assets/Videos/joker.mp4'
import poolVid from '../assets/Videos/deadpool.mp4'
import conjuringVid from '../assets/Videos/conjuring.mp4'
import wickVid from '../assets/Videos/wick.mp4'
import { useState } from 'react';
import MovieCatoCarsoul from '../components/MoveCatoCarsoul';
import Hollywood from '../assets/SecondMovieCar/hollywoodlogo.jpg';
import Bollywood from '../assets/SecondMovieCar/bollywood.jpg';
import Kollywood from '../assets/SecondMovieCar/kollywood.jpg';
import SriLanka from '../assets/SecondMovieCar/slmoi.jpg';
import Japanese from '../assets/SecondMovieCar/japane.jpg';
import Korean from '../assets/SecondMovieCar/korean.jpg';
import { motion } from 'framer-motion';


function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const movies = [
      {
        image: batman,
        video: batmanVid,
        description: 'This is the description for Movie 1. It is an exciting movie about...',
      },
      {
        image: wick,
        video: wickVid,
        description: 'This is the description for Movie 2. A thrilling story that involves...',
      },
      {
        image: conjuring,
        video: conjuringVid,
        description: 'This is the description for Movie 3. A captivating tale about...',
      },
      {
        image: spiderman,
        video: spidermanVid,
        description: 'This is the description for Movie 1. It is an exciting movie about...',
      },
      {
        image: joker,
        video: jokerVid,
        description: 'This is the description for Movie 2. A thrilling story that involves...',
      },
      {
        image: pool,
        video: poolVid,
        description: 'This is the description for Movie 3. A captivating tale about...',
      },
    ];
  
    const catagory =[
        {
            image:Hollywood,
            description:"Best New Hollywood Movies"
        },
        {
            image:Bollywood,
            description:"Best New Bollywood Movies"
        },
        {
            image:Kollywood,
            description:"Best New Kollywood Movies"
        },
        {
            image:SriLanka,
            description:"Best New Sri Lankan Movies"
        },
        {
            image:Japanese,
            description:"Best New Japanese Movies"
        },
        {
            image:Korean,
            description:"Best New Korean Web Series"
        },
       
        
    ]
    

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      setIsPlaying(false);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
      setIsPlaying(false);
    };
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };
  
    return (
      <>
        <motion.div 

initial={{ x: '-50vw' }}
animate={{ x: '-20vw'}}
transition={{ duration: 2 }}
        
        
        className="absolute top-[135px] left-1/2 transform -translate-x-1/2 z-10 text-white text-2xl">
  <span className="font-semibold text-[68px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">WELCOME</span>
  to{' '}
  <motion.span
  
    initial={{ opacity: 0}}
    animate={{ opacity:1 }}
    transition={{ duration: 2 }}
    

    
  
  
  className="text-[65px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">Movie</motion.span>{' '}
  <span className="p-2 bg-blue-600 rounded-xl text-[50px]">AI</span>
</motion.div>

  
        <div className="w-[98vw] h-[100vh] relative ml-1">
          <div className="w-full h-full">
            {!isPlaying ? (
              <img
                src={movies[currentIndex].image}
                alt={`Movie ${currentIndex + 1}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <video
                src={movies[currentIndex].video}
                className="object-cover w-full h-full"
                autoPlay
               
                muted
              ></video>
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="p-2 text-white bg-gray-800 rounded-full focus:outline-none"
            >
              &#9664;
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-white bg-gray-800 rounded-full focus:outline-none"
            >
              &#9654;
            </button>
          </div>
          <div className="flex justify-center">
            <motion.button

initial={{ opacity: 0}}
animate={{ opacity:1 }}
transition={{ duration: 2 }}


              onClick={togglePlay}
              className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 text-white p-5 pl-10 pr-10 rounded-lg hover:bg-red-700 transition"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </motion.button>
          </div>
        </div>
  
        <MovieCatoCarsoul />
  
        <section className="mt-10 text-center">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-white to-blue-900 bg-clip-text">Welcome to <span className='text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text'>Movie AI</span> </h1>
          <p className="mt-5 text-xl text-white ">Discovering movies has never been this smart. MovieAi harnesses the power of AI to revolutionize your movie-watching experience. Whether you're searching for the latest blockbusters, timeless classics, or hidden gems, MovieAi is your ultimate guide. With personalized recommendations tailored just for you, explore a world of cinematic wonders effortlessly.
          
</p>
<br/>
<p className='mt-3 text-lg text-gray-300'>
Feel free to adjust it further based on the specific features and unique selling points of your application. This introduction sets the stage by emphasizing the use of AI for personalized recommendations and highlights the applications user-centric approach.
</p>
        </section>
  
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Categories
            </h1>

            <div className="grid grid-cols-1 gap-5 mt-5 xl:mt-12 xl:gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {catagory.map((category, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg cursor-pointer h-96 group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={category.image}
                                    alt={category.description}
                                    className="object-cover w-full h-full transition duration-500 transform group-hover:scale-105"
                                />

                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-[60%] opacity-90 transition duration-500"></div>
                                        <p className="absolute text-xl font-semibold text-white">{category.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Home;