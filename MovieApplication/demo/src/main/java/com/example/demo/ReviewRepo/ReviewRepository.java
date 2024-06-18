package com.example.demo.ReviewRepo;

import com.example.demo.ReviewEntity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Reviews, Long> {
    List<Reviews> findByMovieId(String movieId);
}
