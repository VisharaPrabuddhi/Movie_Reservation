package com.movie_reservation.ds_assignment.controller;

import com.movie_reservation.ds_assignment.model.Movie;
import com.movie_reservation.ds_assignment.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    /*
        Method - Create Movie
        By - Isuru Pathum Herath
    */

    @PostMapping("/")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        try {
            Movie movieList = movieRepository.save(new Movie(movie.getId(), movie.getName(), movie.getDescription(), movie.getGenre(), movie.getRating(), movie.getReleaseDate(), movie.getLanguage(), movie.getTags(), movie.getDirector(), movie.getCast(), movie.getAvailable(), movie.getMovieURL()));
            return new ResponseEntity<>(movieList, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error :- " + e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
        Method - Get All Movies
        By - Isuru Pathum Herath
    */

    @GetMapping("/")
    public ResponseEntity<List<Movie>> getAllMovies(@RequestParam(required = false) String title) {
        try {
            List<Movie> movies = new ArrayList<Movie>();
            if (title == null)
                movieRepository.findAll().forEach(movies::add);
            else
                movieRepository.findByNameContaining(title).forEach(movies::add);
            if (movies.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(movies, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
        Method - Get Movie by Id
        By - Isuru Pathum Herath
    */

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable("id") String id) {
        Optional<Movie> movies = movieRepository.findById(id);
        if (movies.isPresent()) {
            return new ResponseEntity<>(movies.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    /*
        Method - Update Movies
        By - Isuru Pathum Herath
    */

    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable("id") String id, @RequestBody Movie movie) {
        Optional<Movie> movieData = movieRepository.findById(id);
        if (movieData.isPresent()) {
            Movie movieList = movieData.get();
            movieList.setName(movie.getName());
            movieList.setDescription(movie.getDescription());
            movieList.setGenre(movie.getGenre());
            movieList.setRating(movie.getRating());
            movieList.setReleaseDate(movie.getReleaseDate());
            movieList.setLanguage(movie.getLanguage());
            movieList.setTags(movie.getTags());
            movieList.setDirector(movie.getDirector());
            movieList.setCast(movie.getCast());
            movieList.setAvailable(movie.getAvailable());
            movieList.setMovieURL(movie.getMovieURL());
            return new ResponseEntity<>(movieRepository.save(movieList), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
      Method - Delete Movies by Id
      By - Isuru Pathum Herath
    */

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMovie(@PathVariable("id") String id) {
        try {
            movieRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
      Method - Delete All Movies
      By - Isuru Pathum Herath
    */

    @DeleteMapping("/")
    public ResponseEntity<HttpStatus> deleteAllMovies() {
        try {
            movieRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
      Method - Get by Availability
      By - Isuru Pathum Herath
    */

    @GetMapping("/available")
    public ResponseEntity<List<Movie>> findByAvailability() {
        try {
            List<Movie> movies = movieRepository.findByAvailable(true);
            if (movies.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(movies, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
