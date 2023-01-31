package com.example.repetitionsprojekt.authority;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AuthorityRepository extends CassandraRepository<Authority, UUID> {
}
