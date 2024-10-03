package com.example.demo.services;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.example.demo.dto.AuthResponseDTO;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Signup service
    public AuthResponseDTO signup(User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return new AuthResponseDTO("error", "Already Exist");
        }
        userRepository.save(user);
        return new AuthResponseDTO("success", "success");
    }

    // Login service
    public AuthResponseDTO login(String email, String password) {
        Optional<User> user = userRepository.findByEmailAndPassword(email, password);
        if (user.isPresent()) {
            return new AuthResponseDTO("success", "success");
        }
        return new AuthResponseDTO("error", "failed");
    }
}
