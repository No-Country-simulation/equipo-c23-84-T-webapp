package com.equipo_84.PetMap.controller;

import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.service.mascotaService.IMascotaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mascotas")
public class MascotaController {

    @Autowired
    private IMascotaService mascotaService;

    @PostMapping
    public ResponseEntity<Mascota> saveMascota (@Valid @RequestBody Mascota mascota) {
        return ResponseEntity.status(HttpStatus.CREATED).body(mascotaService.save(mascota));
    }

    @GetMapping
    public ResponseEntity<Mascota> findMascotaById (@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(mascotaService.findMascotaById(id));
    }
}
