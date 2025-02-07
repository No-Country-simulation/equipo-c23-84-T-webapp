package com.equipo_84.PetMap.controller;

import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.service.mascotaService.IMascotaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mascotas")
public class MascotaController {

    @Autowired
    private IMascotaService mascotaService;

    @PostMapping("/crear")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mascota> guardarMascota (@Valid @RequestBody Mascota mascota) {
        return ResponseEntity.status(HttpStatus.CREATED).body(mascotaService.guardarMascota(mascota));
    }

    @GetMapping("/traer/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mascota> mascotaXId (@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(mascotaService.mascotaXId(id));
    }

    @GetMapping("/traer")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Mascota>> listarMascotas () {
        return ResponseEntity.status(HttpStatus.OK).body(mascotaService.listarMascotas());
    }

    @PutMapping("/editar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Mascota> editarMascota(@PathVariable Long id,
                                                 @Valid @RequestBody Mascota mascota) {
        return ResponseEntity.status(HttpStatus.OK).body(mascotaService.editarMascota(id,mascota));
    }

    @DeleteMapping("borrar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> borrarMascota(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(mascotaService.borrarMascota(id));
    }

}
