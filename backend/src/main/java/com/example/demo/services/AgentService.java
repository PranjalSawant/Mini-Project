package com.example.demo.services;

import com.example.demo.dto.AgentAuthResponseDTO;
import com.example.demo.dto.AuthResponseDTO;
import com.example.demo.entities.Agent;
import com.example.demo.repositories.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }
    // Signup service
    public AuthResponseDTO signup(Agent agent) {
        Optional<Agent> existingAgent = agentRepository.findByAgentEmail(agent.getAgentEmail());
        if (existingAgent.isPresent()) {
            return new AuthResponseDTO("error", "Already Exist",0,null, null);
        }
        agentRepository.save(agent);
        return new AuthResponseDTO("success", "success",0,null, null);
    }

    // Login service
    public AgentAuthResponseDTO login(String email, String password) {
        Optional<Agent> agent = agentRepository.findByAgentEmailAndAgentPassword(email, password);
        if (agent.isPresent()) {
            Agent loginAgent = agent.get();
            return new AgentAuthResponseDTO("success", "success",loginAgent.getAgentId(),loginAgent.getAgentFirstName(),loginAgent);
        }
        return new AgentAuthResponseDTO("error", "failed",0,null,null);
    }
}
