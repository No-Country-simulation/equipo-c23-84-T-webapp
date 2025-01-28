package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.repository.IMascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MascotaService implements IMascotaService{

    @Autowired
    private IMascotaRepository mascotaRepository;


    @Override
    public Mascota guardarMascota(Mascota mascota) {
        mascota = mascotaRepository.save(mascota);
        return mascota;
    }
bac
    @Override
    public Mascota mascotaXId(Long id) {
        return mascotaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException ("Mascota con ID " + id + " no encontrada"));
    }

    @Override
    public List<Mascota> listarMascotas() {
        List<Mascota> listaMascotas = mascotaRepository.findAll();
        return listaMascotas;
    }

    @Override
    public Mascota editarMascota(Long id, Mascota mascota) {
        Mascota newMascota = this.mascotaXId(id);
        return mascotaRepository.save(mascota);
    }

}
