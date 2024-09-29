package com.example.demo.services;

import com.example.demo.dto.AuthResponseDTO;
import com.example.demo.entities.Agent;
import com.example.demo.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    // Signup service
    public AuthResponseDTO signup(Agent agent) {
        Optional<Agent> existingAgent = agentRepository.findByAgentEmail(agent.getAgentEmail());
        if (existingAgent.isPresent()) {
            return new AuthResponseDTO("error", "Already Exist");
        }
        agentRepository.save(agent);
        return new AuthResponseDTO("success", "success");
    }

    // Login service
    public AuthResponseDTO login(String email, String password) {
        Optional<Agent> agent = agentRepository.findByAgentEmailAndAgentPassword(email, password);
        if (agent.isPresent()) {
            return new AuthResponseDTO("success", "success");
        }
        return new AuthResponseDTO("error", "failed");
    }
}
