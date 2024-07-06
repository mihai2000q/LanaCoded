package com.lanacodedbe.services;

import com.lanacodedbe.models.Blog;
import com.lanacodedbe.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public Optional<Blog> getBlog(Long id) {
        return blogRepository.findById(id);
    }
    public List<Blog> getBlogs() {
        return blogRepository.findAll();
    }

    public Blog create(String title, String description, String author) {
        Blog blog = new Blog(title, description, author);
        return blogRepository.save(blog);
    }
    public Optional<Blog> update(Blog blog) {
        if (blogRepository.existsById(blog.getId())) {
            return Optional.of(blogRepository.save(blog));
        }
        else
            return Optional.empty();
    }

    public String delete(Long id) {
        if (blogRepository.existsById(id)) {
            blogRepository.deleteById(id);
            return "Blog has been deleted";
        }
        else
            return "Blog does not exist";
    }

    public void makeMeAuthor(int[] blogIds, String author) {
        for (int bId : blogIds) {
            Optional<Blog> b = blogRepository.findById((long) bId);
            if (b.isPresent()) {
                Blog blog = b.get();
                blog.setAuthor(author);
                blogRepository.save(blog);
            }
        }
    }
}
