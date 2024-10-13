package com.example.demo.repositories;

import com.example.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);  //  check if the email is already registered
    Optional<User> findByEmailAndPassword(String email, String password);
    User findByUserId(int userId);
}
