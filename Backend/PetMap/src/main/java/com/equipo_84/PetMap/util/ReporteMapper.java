package com.equipo_84.PetMap.util;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Reporte;
import org.springframework.stereotype.Component;

@Component
public class ReporteMapper {

    public ReporteDTO convertirAReporteDTO(Reporte reporte) {
        ReporteDTO reporteDTO = new ReporteDTO();

        // Asignación de datos de usuario
        reporteDTO.setIdUsuario(reporte.getUsuario().getId());
        reporteDTO.setNombreUsuario(reporte.getUsuario().getNombre());
        reporteDTO.setCorreoUsuario(reporte.getUsuario().getCorreo());

        // Asignación de datos del reporte
        reporteDTO.setIdReporte(reporte.getId());
        reporteDTO.setTipoReporte(reporte.getTipo());
        reporteDTO.setUbicacionReporte(reporte.getUbicacion());
        reporteDTO.setFechaReporte(reporte.getFecha());

        // Asignación de datos de mascota
        reporteDTO.setIdMascota(reporte.getMascota().getId());
        reporteDTO.setNombreMascota(reporte.getMascota().getNombre());
        reporteDTO.setEspecieMascota(reporte.getMascota().getEspecie());
        reporteDTO.setRazaMascota(reporte.getMascota().getRaza());
        reporteDTO.setDescripcionMascota(reporte.getMascota().getDescripcionMascota());
        reporteDTO.setUrlFotoMascota(reporte.getMascota().getUrlFoto());

        return reporteDTO;
    }
}