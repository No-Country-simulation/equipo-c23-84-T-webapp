package com.equipo_84.PetMap.util.Mappers;

import com.equipo_84.PetMap.dto.UsuarioDTO;
import com.equipo_84.PetMap.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {
    public UsuarioDTO convertirAUsuarioDTO(Usuario usuario){
        UsuarioDTO dto = new UsuarioDTO();

        dto.setId(usuario.getId());
        dto.setUsername(usuario.getUsername());
        dto.setCorreo(usuario.getCorreo());
        //dto.setRol(usuario.getRol());

        return dto;
    }

}
