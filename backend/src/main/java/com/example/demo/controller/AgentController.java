package com.example.demo.controller;

import com.example.demo.dto.AcceptOrderDTO;
import com.example.demo.dto.AgentAuthResponseDTO;
import com.example.demo.dto.AuthResponseDTO;
import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.entities.AcceptedOrder;
import com.example.demo.entities.Agent;
import com.example.demo.entities.PendingCollection;
import com.example.demo.services.AcceptedOrderService;
import com.example.demo.services.AgentService;
import com.example.demo.services.PendingCollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin(origins = "*")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @Autowired
    private PendingCollectionService pendingCollectionService;

    @Autowired
    private AcceptedOrderService acceptedOrderService;

    // Signup
    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDTO> signup(@RequestBody Agent agent) {
        AuthResponseDTO response = agentService.signup(agent);
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<AgentAuthResponseDTO> login(@RequestBody LoginRequestDTO loginRequest) {
        AgentAuthResponseDTO response = agentService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    // not used
    // All available pickups at a particular pin code where isAssigned == 'N'
    @GetMapping("/pickups/{pincode}")
    public ResponseEntity<List<PendingCollection>> viewPickupsByZipCode(@PathVariable String pincode) {
        List<PendingCollection> pickups = pendingCollectionService.getPickupsByZipCodeAndIsAssigned(pincode, 'N');

        if (pickups.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(pickups);
        }
    }


    @PostMapping("/confirm-pickup")
    public ResponseEntity<AuthResponseDTO> confirmPickup(@RequestBody AcceptOrderDTO acceptOrderDTO) {
        Optional<PendingCollection> optionalCollection = pendingCollectionService.findById(acceptOrderDTO.getCollectionId());

        if (optionalCollection.isPresent()) {
            PendingCollection collection = optionalCollection.get();

            // Update the pending collection
            collection.setIsAssigned('Y');
            pendingCollectionService.savePendingCollection(collection);

            // Add to AcceptedOrder table
            AcceptedOrder acceptedOrder = new AcceptedOrder();
            acceptedOrder.setUserId(collection.getUserId());
            acceptedOrder.setAgentId(acceptOrderDTO.getAgentId());
            acceptedOrder.setOrderStatus("Accepted");
            acceptedOrder.setPendingCollection(collection);

            acceptedOrderService.saveAcceptedOrder(acceptedOrder);

            // Create success response
            AuthResponseDTO response = new AuthResponseDTO();
            response.setStatus("success");
            response.setMessage("Pickup confirmed, order accepted, and status updated in pending collection.");

            return ResponseEntity.ok(response);
        } else {
            AuthResponseDTO response = new AuthResponseDTO();
            response.setStatus("failure");
            response.setMessage("Collection not found.");

            return ResponseEntity.badRequest().body(response);
        }
    }

}
