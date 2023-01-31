package com.example.repetitionsprojekt.authority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.UUID;

@Data
@AllArgsConstructor
@Table("authorities")
public class Authority {
    @PrimaryKey("authority_id")
    private UUID id;
    @Column("name")
    private String name;

}