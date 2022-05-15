package com.movie_reservation.ds_assignment.repository;

import com.movie_reservation.ds_assignment.model.Theater;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TheaterRepository extends MongoRepository<Theater, String> {
    List<Theater> findByNameContaining(String name);
    List<Theater> findByClose(boolean available);
}
