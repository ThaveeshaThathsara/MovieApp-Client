import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieNavbar from '../../components/MovieNavbar'
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:8080/api/reviews';

const ReviewsServices = {
    getReviews: () => axios.get(`${API_URL}/all`),
    createReview: (review) => axios.post(API_URL, review),
};

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        movieId: '',
        movieName: '',
        movieYear: '',
        username: '',
        content: '',
        imageUrl: ''
    });

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        getReviews();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getReviews = async () => {
        try {
            const response = await ReviewsServices.getReviews();
            setReviews(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ReviewsServices.createReview(newReview);
            setReviews([...reviews, response.data]);
            setNewReview({
                movieId: '',
                movieName: '',
                movieYear: '',
                username: '',
                content: '',
                imageUrl: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container px-4 mx-auto">
            
               
                <div className="flex flex-col items-center justify-center px-8 py-16 bg-gray-900">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-transparent bg-clip-text">
        MovieAI
      </h1>
      <MovieNavbar />

      
            </div>
            <div className='flex flex-col justify-center h-screen gap-10 md:flex-row'>
                <div className="max-h-screen p-5 overflow-auto bg-gray-700 rounded-lg shadow-lg md:w-1/3 lg:w-2/3 ">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex mt-5 overflow-hidden bg-gray-800 rounded-lg shadow-md">
                            <div>
                                {review.imageUrl && (
                                    <img
                                        src={review.imageUrl}
                                        alt={review.movieName}
                                        className="object-cover h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]"
                                    />
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="mb-2 text-xl font-semibold text-blue-500">{review.movieName}</h3>
                                <p className="mb-4 text-white">{review.content}</p>
                                <p className="text-sm text-blue-500"><strong>By:</strong> {review.username}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:w-1/2 lg:w-1/3 mt-[-50px]">
                  <h2 className="my-8 text-3xl font-bold text-center text-blue-500">Submit a Review</h2>
                    <motion.form 

                    initial={{ opacity: 0}}
                    animate={{ opacity:1 }}
                    transition={{ duration: 3}}
                    
                    
                    onSubmit={handleSubmit} className="max-w-lg p-8 mx-auto mb-10 bg-gray-800 rounded-lg shadow-md ">
                        <div className="mb-4">
                            <label htmlFor="movieId" className="block mb-2 font-semibold text-white">Movie ID</label>
                            <input
                                type="text"
                                name="movieId"
                                value={newReview.movieId}
                                onChange={handleInputChange}
                                placeholder="Movie ID"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="movieName" className="block mb-2 font-semibold text-white">Movie Name</label>
                            <input
                                type="text"
                                name="movieName"
                                value={newReview.movieName}
                                onChange={handleInputChange}
                                placeholder="Movie Name"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="movieYear" className="block mb-2 font-semibold text-white">Movie Year</label>
                            <input
                                type="text"
                                name="movieYear"
                                value={newReview.movieYear}
                                onChange={handleInputChange}
                                placeholder="Movie Year"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2 font-semibold text-white">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={newReview.username}
                                onChange={handleInputChange}
                                placeholder="Username"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block mb-2 font-semibold text-white">Review Content</label>
                            <textarea
                                name="content"
                                value={newReview.content}
                                onChange={handleInputChange}
                                placeholder="Review Content"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="imageUrl" className="block mb-2 font-semibold text-white">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={newReview.imageUrl}
                                onChange={handleInputChange}
                                placeholder="Image URL"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button type="submit" className="w-full py-2 text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600">
                            Submit Review
                        </button>
                    </motion.form>
                </div>
            </div>
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed px-4 py-2 text-white bg-blue-500 rounded-full shadow-lg bottom-5 right-5 hover:bg-blue-600 focus:outline-none"
                >
                    Back to Top
                </button>
            )}
        </div>
    );
}

export default Reviews;
