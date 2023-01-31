package com.example.repetitionsprojekt.user;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceNotFoundException;

import java.util.List;
import java.util.UUID;


@RequiredArgsConstructor
@RestController
@RequestMapping("/users")

public class UserController {

    private final UserService userService;


    @GetMapping("/{userId}")
    public ResponseEntity<Users> getUser(@PathVariable UUID userId) throws InstanceNotFoundException {
        return ResponseEntity.ok().body(userService.getUser(userId));
    }


    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        return ResponseEntity.ok().body(userService.getAllUsers());
    }


    @PostMapping
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        return ResponseEntity.ok().body(userService.createUser(user));
    }


    @PutMapping("/{userId}")
    public ResponseEntity<Users> updateUser(@RequestBody Users newUser, @PathVariable UUID userId) {
        return ResponseEntity.ok().body(userService.updateUser(userId, newUser));
    }


    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") UUID userId) throws InstanceNotFoundException {
        userService.deleteUser(userId);
    }

    @ExceptionHandler(InstanceNotFoundException.class)
    public ResponseEntity<String> exceptionHandler(InstanceNotFoundException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }


}