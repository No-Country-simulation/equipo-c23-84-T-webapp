package com.equipo_84.PetMap.controller;

import com.equipo_84.PetMap.dto.AuthRequestDTO;
import com.equipo_84.PetMap.dto.AuthResponseDTO;
import com.equipo_84.PetMap.service.UsuarioService.UserDetailsServiceImp;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private UserDetailsServiceImp userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login (@RequestBody @Valid AuthRequestDTO authRequestDTO) {
        return new ResponseEntity<>(userDetailsService.loginUser(authRequestDTO), HttpStatus.OK);
    }
}
