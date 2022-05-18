package com.movie_reservation.ds_assignment.controller;

import com.movie_reservation.ds_assignment.model.Theater;
import com.movie_reservation.ds_assignment.repository.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/theater")
public class TheaterController {

    @Autowired
    TheaterRepository theaterRepository;

    /*
        Method - Create Theater
        By - Isuru Pathum Herath
    */

    @PostMapping("/")
    public ResponseEntity<Theater> createTheater(@RequestBody Theater theater) {
        try {
            Theater theaterList = theaterRepository.save(new Theater(theater.getId(), theater.getName(), theater.getAddress(), theater.getCity(), false, theater.getNoOfSeat()));
            return new ResponseEntity<>(theaterList, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error :- " + e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
        Method - Get All Theaters
        By - Isuru Pathum Herath
    */

    @GetMapping("/")
    public ResponseEntity<List<Theater>> getAllTheater(@RequestParam(required = false) String title) {
        try {
            List<Theater> theater = new ArrayList<Theater>();
            if (title == null)
                theaterRepository.findAll().forEach(theater::add);
            else
                theaterRepository.findByNameContaining(title).forEach(theater::add);
            if (theater.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(theater, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
        Method - Get Theater by Id
        By - Isuru Pathum Herath
    */

    @GetMapping("/{id}")
    public ResponseEntity<Theater> getTheaterById(@PathVariable("id") String id) {
        Optional<Theater> theater = theaterRepository.findById(id);
        if (theater.isPresent()) {
            return new ResponseEntity<>(theater.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    /*
        Method - Update Theater
        By - Isuru Pathum Herath
    */

    @PutMapping("/{id}")
    public ResponseEntity<Theater> updateTheater(@PathVariable("id") String id, @RequestBody Theater theater) {
        Optional<Theater> theaterData = theaterRepository.findById(id);
        if (theaterData.isPresent()) {
            Theater theaterList = theaterData.get();
            theaterList.setName(theater.getName());
            theaterList.setAddress(theater.getAddress());
            theaterList.setCity(theater.getCity());
            theaterList.setClose(theater.getClose());
            theaterList.setNoOfSeat(theater.getNoOfSeat());
            return new ResponseEntity<>(theaterRepository.save(theaterList), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
      Method - Delete Theater by Id
      By - Isuru Pathum Herath
    */

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTheater(@PathVariable("id") String id) {
        try {
            theaterRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
      Method - Delete All Theaters
      By - Isuru Pathum Herath
    */

    @DeleteMapping("/")
    public ResponseEntity<HttpStatus> deleteAllTheaters() {
        try {
            theaterRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
      Method - Get by Close or Not Close
      By - Isuru Pathum Herath
    */

    @GetMapping("/available")
    public ResponseEntity<List<Theater>> findByAvailability() {
        try {
            List<Theater> theater = theaterRepository.findByClose(true);
            if (theater.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(theater, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
