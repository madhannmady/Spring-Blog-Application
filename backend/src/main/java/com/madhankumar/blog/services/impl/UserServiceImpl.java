package com.madhankumar.blog.services.impl;

import com.madhankumar.blog.domain.entities.User;
import com.madhankumar.blog.repositories.UserRepository;
import com.madhankumar.blog.services.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getUserById(UUID id) {
        return userRepository
                .findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: "+id));
    }
}
