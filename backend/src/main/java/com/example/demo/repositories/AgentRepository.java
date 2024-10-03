package com.example.demo.repositories;

import com.example.demo.entities.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AgentRepository extends JpaRepository<Agent, Integer> {
    Optional<Agent> findByAgentEmail(String agentEmail);
    Optional<Agent> findByAgentEmailAndAgentPassword(String agentEmail, String agentPassword);
}
