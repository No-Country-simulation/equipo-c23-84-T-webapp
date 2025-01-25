package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.entity.Mascota;

import java.util.List;

public interface IMascotaService {
    Mascota save(Mascota mascota);
    Mascota findById(Long id);

    List<Mascota> findAll();
}
