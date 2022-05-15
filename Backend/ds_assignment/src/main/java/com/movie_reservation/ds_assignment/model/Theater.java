package com.movie_reservation.ds_assignment.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "theater")
@Data
public class Theater {

    @Id
    private String id;
    private String name;
    private String address;
    private String city;
    private Boolean close;
    private int noOfSeat;

    public Theater(String id, String name, String address, String city, Boolean close, int noOfSeat) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.close = close;
        this.noOfSeat = noOfSeat;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Boolean getClose() {
        return close;
    }

    public void setClose(Boolean close) {
        this.close = close;
    }

    public int getNoOfSeat() {
        return noOfSeat;
    }

    public void setNoOfSeat(int noOfSeat) {
        this.noOfSeat = noOfSeat;
    }
}
