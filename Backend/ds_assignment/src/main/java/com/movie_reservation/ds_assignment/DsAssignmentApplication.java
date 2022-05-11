package com.movie_reservation.ds_assignment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
public class DsAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsAssignmentApplication.class, args);
		System.out.println("Server Started under port : 8080");
	}

}
