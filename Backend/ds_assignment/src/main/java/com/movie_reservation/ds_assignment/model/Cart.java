package com.movie_reservation.ds_assignment.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("cart")
@Data
public class Cart {
    @Id
    private ObjectId id;
    private String userID;
    private String userName;
    private String movieName;
    private Date showDate;
    private Date bookedDate;
    private String showTime;
    private String theaterName;
    private int ticketAmount;

    public Cart(ObjectId id, String userID, String userName, String movieName, String showTime, Date showDate, Date bookedDate, String theaterName, int ticketAmount) {
    }
}
