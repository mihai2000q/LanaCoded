package com.lanacodedbe.contracts;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateBlogRequest {
    private String title;
    private String description;
    private String author;
}
