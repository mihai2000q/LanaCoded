package com.lanacodedbe.contracts;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateBlogRequest {
    private Long id;
    private String title;
    private String description;
    private String author;
}
