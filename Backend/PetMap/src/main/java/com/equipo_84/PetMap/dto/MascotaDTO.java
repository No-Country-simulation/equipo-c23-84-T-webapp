package com.equipo_84.PetMap.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MascotaDTO {
    private String nombre;
    private String especie;
    private String raza;
    private String descripcion;
    private String urlFoto;
}
