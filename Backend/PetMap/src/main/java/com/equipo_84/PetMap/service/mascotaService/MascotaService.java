package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.dto.MascotaDTO;
import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.repository.IMascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MascotaService implements IMascotaService{

    @Autowired
    private IMascotaRepository mascotaRepository;


    @Override
    public Mascota save(MascotaDTO mascotaDTO) {
        Mascota mascota = new Mascota();

        mascota.setNombre(mascotaDTO.getNombre());
        mascota.setEspecie(mascotaDTO.getEspecie());
        mascota.setRaza(mascotaDTO.getRaza());
        mascota.setDescripcion(mascotaDTO.getDescripcion());
        mascota.setUrlFoto(mascotaDTO.getUrlFoto());

        mascota = mascotaRepository.save(mascota);
        return mascota;
    }
}
