package com.example.demo.services;

import com.example.demo.entities.PendingOffer;
import com.example.demo.entities.User;
import com.example.demo.repositories.PendingOfferRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
            return new AuthResponseDTO("error", "Already Exist", 0, null, null);
        }
        userRepository.save(user);
        return new AuthResponseDTO("success", "Signup successful", 0, null,null);
    }

    // Login service
    public AuthResponseDTO login(String email, String password) {
        Optional<User> user = userRepository.findByEmailAndPassword(email, password);
        if (user.isPresent()) {
            User loggedInUser = user.get();
            return new AuthResponseDTO("success", "Login successful", loggedInUser.getUserId(), loggedInUser.getFirstname() , loggedInUser);
        }
        return new AuthResponseDTO("error", "Login failed", 0, null, null);
    }

//    @Autowired
//    private PendingOfferRepository pendingOfferRepository;
//
//    public List<PendingOffer> getPendingOffersByUserId(int userId) {
//        // Fetch user by ID
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        // Fetch all pending offers associated with the user
//        return pendingOfferRepository.findByUser(user);
//    }
}
