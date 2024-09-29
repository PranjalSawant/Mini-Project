package com.example.demo.controller;

import com.example.demo.dto.AuthResponseDTO;
import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/user", produces = "application/json")
@CrossOrigin(origins = "*") // Allow requests from http://localhost:5173
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String getMessage() {
        return "working.......";
    }
    // Signup endpoint
    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDTO> signup(@RequestBody User user) {
        AuthResponseDTO response = userService.signup(user);
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequestDTO loginRequest) {
        AuthResponseDTO response = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
}
