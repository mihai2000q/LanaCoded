package com.lanacodedbe.controllers;

import com.lanacodedbe.contracts.CreateBlogRequest;
import com.lanacodedbe.contracts.MakeMeAuthorRequest;
import com.lanacodedbe.contracts.UpdateBlogRequest;
import com.lanacodedbe.dtos.BlogDTO;
import com.lanacodedbe.mappers.BlogMapper;
import com.lanacodedbe.models.Blog;
import com.lanacodedbe.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("blogs")
public class BlogController {
    private final BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping("{id}")
    public ResponseEntity<BlogDTO> getBlog(@PathVariable Long id) {
        Optional<Blog> blog = blogService.getBlog(id);
        return blog.map(b -> new ResponseEntity<>(BlogMapper.map(b), HttpStatus.OK))
                .orElse(new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }

    @GetMapping("all")
    public ResponseEntity<List<Blog>> getBlogs() {
        return new ResponseEntity<>(blogService.getBlogs(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Blog> create(@RequestBody CreateBlogRequest request) {
        Blog blog = blogService.create(request.getTitle(),
                request.getDescription(), request.getAuthor());
        return new ResponseEntity<>(blog, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Blog> update(@RequestBody UpdateBlogRequest request) {
        Optional<Blog> blog = blogService.update(new Blog(request.getId(),
                        request.getTitle(),
                        request.getDescription(),
                        request.getAuthor()));
        return blog.map(b -> new ResponseEntity<>(b, HttpStatus.OK))
                .orElse(new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return new ResponseEntity<>(blogService.delete(id), HttpStatus.OK);
    }

    @PostMapping("makeMeAuthor")
    public ResponseEntity<String> makeMeAuthor(@RequestBody MakeMeAuthorRequest makeMeAuthorRequest) {
        blogService.makeMeAuthor(makeMeAuthorRequest.getBlogIds(), makeMeAuthorRequest.getAuthor());
        return new ResponseEntity<>("This is a feature.", HttpStatus.OK);
    }
}
