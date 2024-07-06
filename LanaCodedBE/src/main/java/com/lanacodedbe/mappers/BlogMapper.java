package com.lanacodedbe.mappers;

import com.lanacodedbe.dtos.BlogDTO;
import com.lanacodedbe.models.Blog;

public class BlogMapper {
    public static BlogDTO map(Blog blog) {
        return new BlogDTO(blog.getId(), blog.getTitle(), blog.getDescription(), blog.getAuthor());
    }
}
