package com.equipo_84.PetMap.dto;

import com.equipo_84.PetMap.entity.enums.Rol;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    private Long id;
    private String username;
    private String correo;
    private Rol rol;

}
