package com.example.repetitionsprojekt.product;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@Table("movie")
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @PrimaryKey("movieId")
    private UUID movieId;
    @NotNull
    @Column("movieName")
    private String movieName;
    @Column("moviePrice")
    private Integer moviePrice;
    @Column("movieGenre")
    private String movieGenre;
}

