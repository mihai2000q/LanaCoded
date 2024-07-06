package com.lanacodedbe.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BlogDTO {
    private Long id;
    private String title;
    private String description;
    private String author;
}
