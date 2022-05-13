package com.movie_reservation.ds_assignment.repository;

import com.movie_reservation.ds_assignment.model.Movie;
import com.movie_reservation.ds_assignment.model.Tutorial;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MovieRepository extends MongoRepository<Movie, String> {
    List<Movie> findByNameContaining(String name);
    List<Movie> findByAvailable(boolean available);
}
