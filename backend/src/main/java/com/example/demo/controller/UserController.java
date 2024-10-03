package com.example.demo.controller;

import com.example.demo.dto.AuthResponseDTO;
import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.dto.PickupRequestDTO;
import com.example.demo.entities.PendingCollection;
import com.example.demo.entities.User;
import com.example.demo.services.PendingCollectionService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping(value = "/api/user", produces = "application/json")
@CrossOrigin(origins = "*") // Allow requests from http://localhost:5173
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String getMessage() {
        return "working.......";
    }
    @Autowired
    private PendingCollectionService pendingCollectionService;

    @PostMapping("/pickup")
    public ResponseEntity<AuthResponseDTO> placePickupOrder(@RequestBody PickupRequestDTO pickupRequest) {
        PendingCollection collection = new PendingCollection();

        collection.setUserId(pickupRequest.getUserId());
        collection.setCollectionType(pickupRequest.getCollectionType());
        collection.setCollectionName(pickupRequest.getCollectionName());
        collection.setCollectionDescription(pickupRequest.getCollectionDescription());
        collection.setIsAssigned('N');

        // Parse and create Date objects for start and end time
        String pickupDate = pickupRequest.getPickupDate();
        String pickupStartTime = pickupRequest.getPickupStartTime();
        String pickupEndTime = pickupRequest.getPickupEndTime();

        // Assuming you have a utility method to parse the date and time
        Date startTime = parseDateTime(pickupDate, pickupStartTime);
        collection.setCollectionStartTime(startTime);

        // Set end time (e.g., adding 1 hour)
        Date endTime = parseDateTime(pickupDate, pickupEndTime);
        collection.setCollectionEndTime(endTime);

        collection.setCollectionStatus("Pending");
        collection.setCollectionState(pickupRequest.getPickupAddress().getState());
        collection.setCollectionCity(pickupRequest.getPickupAddress().getCity());
        collection.setCollectionZip(pickupRequest.getPickupAddress().getZip());
        collection.setCollectionCountry(pickupRequest.getPickupAddress().getCountry());

        pendingCollectionService.savePendingCollection(collection);

        AuthResponseDTO response = new AuthResponseDTO();
        response.setStatus("success");
        response.setMessage("Pickup request added to pending collection successfully");

        return ResponseEntity.ok(response);
    }

    // Utility method
    private Date parseDateTime(String date, String time) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm a");
            return sdf.parse(date + " " + time);
        } catch (ParseException e) {
            throw new RuntimeException("Invalid date or time format");
        }
    }

    // Signup endpoint
    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDTO> signup(@RequestBody User user) {
        AuthResponseDTO response = userService.signup(user);
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequestDTO loginRequest) {
        AuthResponseDTO response = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (response.getStatus().equals("success")) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
}
