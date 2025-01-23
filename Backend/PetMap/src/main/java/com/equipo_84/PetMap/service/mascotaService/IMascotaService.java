package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.dto.MascotaDTO;
import com.equipo_84.PetMap.entity.Mascota;

public interface IMascotaService {
    Mascota save(MascotaDTO mascotaDTO);
}
