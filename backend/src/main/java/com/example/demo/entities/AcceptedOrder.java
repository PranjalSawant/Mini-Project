package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "accepted_orders")
public class AcceptedOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId; // Unique identifier for the order
    private int userId; // ID of the user who placed the order
    private int agentId; // ID of the agent who accepted the order
    private String orderStatus; // Status of the order (e.g., accepted, completed)

    // Getters and Setters
    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getAgentId() {
        return agentId;
    }

    public void setAgentId(int agentId) {
        this.agentId = agentId;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }
}
