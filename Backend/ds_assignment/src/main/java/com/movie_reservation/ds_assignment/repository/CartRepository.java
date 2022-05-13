package com.movie_reservation.ds_assignment.repository;

import com.movie_reservation.ds_assignment.model.Cart;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepository extends MongoRepository<Cart, String> {

    void deleteById(ObjectId movieId);
}
