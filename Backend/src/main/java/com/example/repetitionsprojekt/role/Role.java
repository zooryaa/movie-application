package com.example.repetitionsprojekt.role;

import com.example.repetitionsprojekt.authority.Authority;
import lombok.Data;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@Data
@Table("role")
public class Role {

    @PrimaryKey("role_id")
    private UUID id;

    @NotNull
    @Column("name")
    private String name;

    private List<Authority> authorities;

}