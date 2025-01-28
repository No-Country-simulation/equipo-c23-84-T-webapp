package com.equipo_84.PetMap.service.mascotaService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.repository.IMascotaRepository;
import com.equipo_84.PetMap.util.ReporteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class MascotaService implements IMascotaService{

    @Autowired
    private IMascotaRepository mascotaRepository;

    @Autowired
    private ReporteMapper reporteMapper;



    @Override
    public Mascota save(Mascota mascota) {
        mascota = mascotaRepository.save(mascota);
        return mascota;
    }

    @Override
    public Mascota findById(Long id) {
        return mascotaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Mascota con ID " + id + " no encontrada"));
    }

    @Override
    public List<Mascota> findAll() {
        List<Mascota> listaMascotas = mascotaRepository.findAll();
        return listaMascotas;
    }

    @Override
    public List<ReporteDTO> mascotaXespecie(String especie) {
        List<Mascota> listaMascotas=mascotaRepository.findByEspecieConReporte(especie);
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Mascota mascota : listaMascotas) {
            ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(mascota.getReporte());
            listaReportesDTO.add(reporteDTO);
        }

        return listaReportesDTO;
    }
    @Override
    public List<ReporteDTO> mascotaXraza(String raza) {
        List<Mascota> listaMascotas=mascotaRepository.findByRazaConReporte(raza);
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Mascota mascota : listaMascotas) {
            ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(mascota.getReporte());
            listaReportesDTO.add(reporteDTO);
        }

        return listaReportesDTO;
    }


}
