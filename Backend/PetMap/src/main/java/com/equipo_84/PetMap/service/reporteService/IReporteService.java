package com.equipo_84.PetMap.service.reporteService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.enums.TipoReporte;

import java.time.LocalDate;
import java.util.List;

public interface IReporteService {

    public Reporte guardarReporte(ReporteDTO reporteDTO);

    public List <Reporte> listarReportes();

    public Reporte reporteXid(Long id);

    public List<Reporte> reportesXtipo(TipoReporte tipoReporte);

    public List<Reporte> reportesXubicacion(String ubicacion);

    public List<Reporte> reportesXfecha(LocalDate fecha);

    public Reporte editarReporte(Reporte reporte);

    public void borrarReporte(Long id);


}
