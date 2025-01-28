package com.equipo_84.PetMap.service.reporteService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.enums.TipoReporte;

import java.time.LocalDate;
import java.util.List;

public interface IReporteService {

    ReporteDTO guardarReporte(ReporteDTO reporteDTO);

    List<ReporteDTO> listarReportes();

    ReporteDTO reporteXid(Long id);

    List<ReporteDTO> reportesXtipo(TipoReporte tipoReporte);

    List<ReporteDTO> reportesXubicacion(String ubicacion);

    List<ReporteDTO> reportesXfecha(LocalDate fecha);

    List<ReporteDTO> reportesXespecie(String especie);

    List<ReporteDTO> reportesXraza(String raza);

    ReporteDTO editarReporte(Long id, ReporteDTO reporte);

    boolean borrarReporte(Long id);


}
