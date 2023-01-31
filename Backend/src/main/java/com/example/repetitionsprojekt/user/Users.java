package com.example.repetitionsprojekt.user;

import com.example.repetitionsprojekt.role.Role;
import lombok.*;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.UUID;

@Data
@Table("users")
@AllArgsConstructor
@NoArgsConstructor

public class Users {
    @PrimaryKey("user_id")
    private UUID userId;
    @Column("user_name")
    private String userName;
    private String password;
    private Role role;
}
