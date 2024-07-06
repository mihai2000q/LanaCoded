package com.lanacodedbe.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String author;
    private Date lastTimeUpdated;
    private Date creationDate;

    public Blog(String title, String description, String author) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.lastTimeUpdated = new Date();
    }

    public Blog(Long id, String title, String description, String author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.lastTimeUpdated = new Date();
    }
}
