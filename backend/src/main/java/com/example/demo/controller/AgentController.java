package com.example.demo.controller;

import com.example.demo.dto.AuthResponseDTO;
import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.entities.Agent;
import com.example.demo.services.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    // Signup endpoint
    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDTO> signup(@RequestBody Agent agent) {
        AuthResponseDTO response = agentService.signup(agent);
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequestDTO loginRequest) {
        AuthResponseDTO response = agentService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
}
