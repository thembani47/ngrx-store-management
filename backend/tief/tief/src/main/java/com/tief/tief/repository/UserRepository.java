package com.tief.tief.repository;

import com.tief.tief.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByPassword(String password);
    Optional<User> findByEmailAndPassword(String email, String password);
}
