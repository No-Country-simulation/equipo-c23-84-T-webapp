package com.equipo_84.PetMap.service.reporteService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.enums.TipoReporte;

import java.time.LocalDate;
import java.util.List;

public interface IReporteService {

    public ReporteDTO guardarReporte(ReporteDTO reporteDTO);

    public List<ReporteDTO> listarReportes();

    public ReporteDTO reporteXid(Long id);

    public List<ReporteDTO> reportesXtipo(TipoReporte tipoReporte);

    public List<ReporteDTO> reportesXubicacion(String ubicacion);

    public List<ReporteDTO> reportesXfecha(LocalDate fecha);

    public ReporteDTO editarReporte(Long id, ReporteDTO reporte);

    public boolean borrarReporte(Long id);


}
