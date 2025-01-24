package com.equipo_84.PetMap.dto;

import com.equipo_84.PetMap.entity.enums.TipoReporte;
import com.equipo_84.PetMap.util.Errors;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReporteDTO {

    @NotBlank(message = Errors.VACIO)
    private long UserId;

    private TipoReporte tipo;
    private String ubicacion;
    private LocalDate fecha;

    private String nombre;
    private String especie;
    private String raza;
    private String descripcion;
    private String urlFoto;


}
