package com.equipo_84.PetMap.service.reporteService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.enums.TipoReporte;
import com.equipo_84.PetMap.repository.IReporteRepository;
import com.equipo_84.PetMap.service.mascotaService.IMascotaService;
import com.equipo_84.PetMap.util.Errors;
import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

public class ReporteService implements IReporteService{

    private final IMascotaService mascotaService;
    private final IReporteRepository reporteRepository;

    public ReporteService(IMascotaService mascotaService, IReporteRepository reporteRepository) {
        this.mascotaService = mascotaService;
        this.reporteRepository = reporteRepository;
    }

    @Transactional
    @Override
    public Reporte guardarReporte(ReporteDTO reporteDTO) {
        Mascota nuevaMascota = new Mascota();
        nuevaMascota.setNombre(reporteDTO.getNombre());
        nuevaMascota.setEspecie(reporteDTO.getEspecie());
        nuevaMascota.setRaza(reporteDTO.getRaza());
        nuevaMascota.setDescripcion(reporteDTO.getDescripcion());
        nuevaMascota.setUrlFoto(reporteDTO.getUrlFoto());

        Mascota mascotaGuardada = mascotaService.save(nuevaMascota);

        Reporte reporte = new Reporte();
        reporte.setMascota(mascotaGuardada);
        reporte.setUsuario(reporteDTO.getUsuario());
        reporte.setFecha(reporteDTO.getFecha());
        reporte.setUbicacion(reporteDTO.getUbicacion());

        return reporteRepository.save(reporte);
    }

    @Override
    public List<Reporte> listarReportes() {
        return reporteRepository.findAll();
    }

    @Override
    public Reporte reporteXid(Long id) {
        return reporteRepository.findById(id).orElse(null);
    }

    @Override
    public List<Reporte> reportesXtipo(TipoReporte tipoReporte) {
        return reporteRepository.findByTipo(tipoReporte);
    }

    @Override
    public List<Reporte> reportesXubicacion(String ubicacion) {
        return reporteRepository.findByUbicacion(ubicacion);
    }

    @Override
    public List<Reporte> reportesXfecha(LocalDate fecha) {
        return reporteRepository.findByFecha(fecha);
    }

    @Override
    public Reporte editarReporte(Reporte reporte) {
        return reporteRepository.save(reporte);
    }

    @Override
    public void borrarReporte(Long id) {
        if (!reporteRepository.existsById(id)) {
            throw new NoSuchElementException(String.format(Errors.REPORT_NOT_FOUND, id));
        }
        reporteRepository.deleteById(id);
    }
}
