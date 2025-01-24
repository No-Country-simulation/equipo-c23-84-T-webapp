package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.repository.IMascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class MascotaService implements IMascotaService{

    @Autowired
    private IMascotaRepository mascotaRepository;


    @Override
    public Mascota save(Mascota mascota) {
        mascota = mascotaRepository.save(mascota);
        return mascota;
    }

    @Override
    public Mascota findMascotaById(Long id) {
        return mascotaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Mascota con ID " + id + " no encontrada"));
    }
}
