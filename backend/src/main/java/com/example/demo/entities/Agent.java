package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "agents")
public class Agent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int agentId;

    private String agentFirstName;
    private String agentLastName;
    private String agentEmail;
    private String agentPassword;
    private Long phone;
    private String agentType;
    private String agentAddress;
    private String agentCity;
    private String agentState;
    private String agentZip;
    private String agentCountry;


}
