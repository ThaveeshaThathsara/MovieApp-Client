package com.example.demo.ReviewService;

import com.example.demo.ReviewEntity.Reviews;
import com.example.demo.ReviewRepo.ReviewRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewsService {
    @Autowired
    private ReviewRepository reviewRepository;

    public List<Reviews> getAllReviews(){
        return reviewRepository.findAll();
    }

    public List<Reviews> getReviewsByMovieId(String movieId){
        return reviewRepository.findByMovieId(movieId);
    }

    public Reviews createReviews(Reviews reviews){
        return reviewRepository.save(reviews);
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }

    public Reviews updateReview(Long id, Reviews reviews){
        Reviews existingReview = reviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Review not found"));
        existingReview.setContent(reviews.getContent());
        existingReview.setMovieId(reviews.getMovieId());
        existingReview.setMovieName(reviews.getMovieName());
        existingReview.setMovieYear(reviews.getMovieYear());
        existingReview.setUsername(reviews.getUsername());
        existingReview.setImageUrl(reviews.getImageUrl());
        return reviewRepository.save(existingReview);
    }
}
