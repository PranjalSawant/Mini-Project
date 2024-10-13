package com.example.demo.dto;

import com.example.demo.entities.Agent;
import com.example.demo.entities.User;

public class AgentAuthResponseDTO {
    private String status;
    private String message;
    private int id;
    private String username;
    private Agent agent;

    public AgentAuthResponseDTO(String status, String message, int id, String username, Agent agent) {
        this.status = status;
        this.message = message;
        this.id = id;
        this.username = username;
        this.agent = agent;
    }

    public AgentAuthResponseDTO() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Agent getAgent() {
        return agent;
    }

    public void setUser(Agent agent) {
        this.agent = agent;
    }
}
