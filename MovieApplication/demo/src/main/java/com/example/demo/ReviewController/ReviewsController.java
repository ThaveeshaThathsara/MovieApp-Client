package com.example.demo.ReviewController;

import com.example.demo.ReviewEntity.Reviews;
import com.example.demo.ReviewService.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewsController {
    @Autowired
    private ReviewsService reviewsService;

    @GetMapping("/all")
    public List<Reviews> getAllReviews() {
        return reviewsService.getAllReviews();
    }

    @GetMapping("/{movieId}")
    public List<Reviews> getReviewsByMovieId(@PathVariable String movieId) {
        return reviewsService.getReviewsByMovieId(movieId);
    }

    @PostMapping
    public Reviews createReview(@RequestBody Reviews review) {
        return reviewsService.createReviews(review);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable Long id) {
        reviewsService.deleteReview(id);
    }

    @PutMapping("/{id}")
    public Reviews updateReview(@PathVariable Long id, @RequestBody Reviews review) {
        return reviewsService.updateReview(id, review);
    }
}
