package com.cadastro_de_usuario.crm.repository;

import com.cadastro_de_usuario.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}