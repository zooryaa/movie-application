package com.example.repetitionsprojekt.user;



import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;


@Repository
public interface UserRepository extends CassandraRepository<Users, UUID> {
    Users findByUserName (String username);
}
