package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

public class AcceptOrderDTO {
    private int collectionId;
    private int agentId;

    public int getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(int collectionId) {
        this.collectionId = collectionId;
    }

    public int getAgentId() {
        return agentId;
    }

    public void setAgentId(int agentId) {
        this.agentId = agentId;
    }
}
