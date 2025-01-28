package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.entity.Mascota;

import java.util.List;

public interface IMascotaService {
    Mascota guardarMascota(Mascota mascota);
    Mascota mascotaXId(Long id);
    List<Mascota> listarMascotas();
    Mascota editarMascota(Long id, Mascota mascota);
}
