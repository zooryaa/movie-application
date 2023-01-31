package com.example.repetitionsprojekt.product;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService service;

    @GetMapping("/")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok().body(service.getAllMovie());
    }

    @GetMapping("/{movieId}")
    public ResponseEntity<Movie> getMovieById( @PathVariable UUID movieId) throws InstanceNotFoundException {
        return ResponseEntity.ok().body(service.getMovie(movieId));
    }

    @PostMapping
    public ResponseEntity<Movie> createBook( @RequestBody Movie movie)  {
        return ResponseEntity.ok().body(service.createMovie(movie));
    }

    @PutMapping("/{movieId}")
    public ResponseEntity<Movie> updateMovie( @RequestBody Movie newMovie, @PathVariable UUID movieId) {
        return ResponseEntity.ok().body(service.updateMovie(movieId, newMovie));
    }

    @DeleteMapping("/{movieId}")
    public void deleteMovie( @PathVariable("movieId") UUID movieId) throws InstanceNotFoundException {
        service.deleteMovie(movieId);
    }

}
