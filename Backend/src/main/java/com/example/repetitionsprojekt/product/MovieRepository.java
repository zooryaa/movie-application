package com.example.repetitionsprojekt.product;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;
import org.yaml.snakeyaml.tokens.Token;

import java.util.UUID;

@Repository
public interface MovieRepository extends CassandraRepository<Movie, UUID> {
}
