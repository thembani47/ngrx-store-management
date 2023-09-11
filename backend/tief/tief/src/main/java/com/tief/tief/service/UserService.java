package com.tief.tief.service;

import com.tief.tief.dto.LoginDto;
import com.tief.tief.entity.User;
import com.tief.tief.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;
    PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }
    public Optional<User> save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println(user.getPassword());
        return Optional.of(this.userRepository.save(user));
    }

    public List<User> all() {
        return this.userRepository.findAll();
    }
    public Optional<User> getByEmail(String email){
            return this.userRepository.findByEmail(email);

    }
    public Optional<User> login(LoginDto user) {
        Optional<User> user1 = userRepository.findByEmail(user.getEmail());
        if (user1 != null){
            String password = user.getPassword();
            String encodedPassword = user1.get().getPassword();
            Boolean rightPassword = passwordEncoder.matches(password,encodedPassword);
            if (rightPassword){
                Optional<User> user2 = userRepository.findByEmailAndPassword(user.getPassword(),encodedPassword);
                if (user2.isPresent()){
                    return this.userRepository.findByEmail(user.getEmail());
                }else {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid");
                }
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid");
    }

}
