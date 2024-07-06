package com.lanacodedbe.repositories;

import com.lanacodedbe.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {
}
