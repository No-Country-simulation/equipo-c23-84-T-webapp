package com.equipo_84.PetMap.controller;

import com.equipo_84.PetMap.dto.MascotaDTO;
import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.service.mascotaService.IMascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mascotas")
public class MascotaController {

    @Autowired
    private IMascotaService mascotaService;

    @PostMapping
    public ResponseEntity<Mascota> saveMascota (@RequestBody MascotaDTO mascotaDTO) {
        return new ResponseEntity<>(mascotaService.save(mascotaDTO), HttpStatus.CREATED);
    }
}
