package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.entity.Mascota;

public interface IMascotaService {
    Mascota save(Mascota mascota);
    Mascota findMascotaById(Long id);
}
