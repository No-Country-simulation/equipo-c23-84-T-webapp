package com.equipo_84.PetMap.dto;

import com.equipo_84.PetMap.entity.enums.TipoReporte;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReporteDTO {

    private Long idUsuario;
    private String nombreUsuario;
    private String correoUsuario;

    private Long idReporte;
    private TipoReporte tipoReporte;
    private String ubicacionReporte;
    private LocalDate fechaReporte;

    private Long idMascota;
    private String nombreMascota;
    private String especieMascota;
    private String razaMascota;
    private String descripcionMascota;
    private String urlFotoMascota;


}
