package com.lanacodedbe.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class BlogDTO {
    private Long id;
    private String title;
    private String description;
    private String author;
    private Date creationDate;
}
