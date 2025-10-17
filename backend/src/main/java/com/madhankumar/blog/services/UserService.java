package com.madhankumar.blog.services;

import com.madhankumar.blog.domain.entities.User;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface UserService {
    User getUserById(UUID id);
}
