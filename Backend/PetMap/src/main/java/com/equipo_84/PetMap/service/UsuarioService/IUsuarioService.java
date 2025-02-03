package com.equipo_84.PetMap.service.UsuarioService;

import com.equipo_84.PetMap.dto.UsuarioDTO;
import com.equipo_84.PetMap.entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface IUsuarioService {

    List<UsuarioDTO> findAll();

    Optional<UsuarioDTO> findById(Long id);

    UsuarioDTO updateUsuario(Long id, UsuarioDTO usuario);

    void deleteUsuario(Long id);

    Usuario createUsuario(Usuario usuario);

    String encriptPassword(String password);
}
