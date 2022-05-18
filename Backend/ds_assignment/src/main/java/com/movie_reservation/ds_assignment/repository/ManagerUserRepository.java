package com.movie_reservation.ds_assignment.repository;

import com.movie_reservation.ds_assignment.model.ManagerUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ManagerUserRepository extends MongoRepository<ManagerUser, String> {
    List<ManagerUser> findByFirstNameContaining(String firstName);
    List<ManagerUser> findByType(String type);
}
