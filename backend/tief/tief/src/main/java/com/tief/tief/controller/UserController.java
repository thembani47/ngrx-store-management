package com.tief.tief.controller;

import com.tief.tief.dto.LoginDto;
import com.tief.tief.entity.User;
import com.tief.tief.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {

        this.userService = userService;
    }


    @PostMapping("register")
    public Optional<User> save(@RequestBody User user) {
        Optional<User> user1 = userService.getByEmail(user.getEmail());
        if (user1.isPresent()){
            throw new ResponseStatusException(HttpStatus.FOUND,"Email already exists");
        }
        return userService.save(user);
    }

    @PostMapping("login")
    public Optional<User> login(@RequestBody LoginDto user){
        return userService.login(user);
    }

    @GetMapping("all")
    public List<User> getAllUsers() {
        return userService.all();
    }
    @GetMapping("/{email}")
    public User getByEmail(@PathVariable String email){
        final Optional<User> user = userService.getByEmail(email);
        return user.get();
    }
}
