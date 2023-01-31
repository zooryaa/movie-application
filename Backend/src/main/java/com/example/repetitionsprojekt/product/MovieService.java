package com.example.repetitionsprojekt.product;



import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
@Log4j2
public class MovieService {

    private final MovieRepository repository;

    @Autowired
    public MovieService(MovieRepository repository) {
        this.repository = repository;
    }

    public List<Movie> getAllMovie() {
        return repository.findAll();
    }

    public Movie getMovie(UUID id) throws InstanceNotFoundException {
        return repository.findById(id).orElseThrow(() -> new InstanceNotFoundException("There is no Movie with this id"));

    }

    public Movie createMovie(Movie movie) {
        return repository.save(movie);
    }

    public Movie updateMovie(UUID movieId, Movie newMovie) {
        return repository.findById(movieId).map(
                movie -> {
                    movie.setMovieGenre(newMovie.getMovieGenre());
                    movie.setMovieName(newMovie.getMovieName());
                    movie.setMoviePrice(newMovie.getMoviePrice());
                    return repository.save(movie);
                }).orElseGet(() -> {
            newMovie.setMovieId(movieId);
            return repository.save(newMovie);
        });
    }

    public void deleteMovie(UUID movieId) throws InstanceNotFoundException {
        if (!repository.existsById(movieId)) {
            throw new InstanceNotFoundException("This Movie does not exist");
        } else {
            log.info("Book was deleted");
            repository.deleteById(movieId);
        }

    }




}
