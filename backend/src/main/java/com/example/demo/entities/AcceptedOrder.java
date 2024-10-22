package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "accepted_orders")
public class AcceptedOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;
    private int userId;
    private int agentId;
    private String orderStatus;
    private Date createdDate;
    private Date modifiedDate;

    @OneToOne
    @JoinColumn(name = "collection_id", referencedColumnName = "collectionId")
    @JsonBackReference
    private PendingCollection pendingCollection;

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user; // Add a reference to the User entity

    @ManyToOne
    @JoinColumn(name = "agentId", insertable = false, updatable = false)
    private Agent agent; // Add a reference to the Agent entity
}
