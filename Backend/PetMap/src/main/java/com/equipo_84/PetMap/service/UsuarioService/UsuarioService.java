package com.equipo_84.PetMap.service.UsuarioService;

import com.equipo_84.PetMap.entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface UsuarioService {

    List<Usuario> findAll();

    Optional<Usuario> findById(Long id);

    Usuario updateUsuario(Long id, Usuario usuario);

    void deleteUsuario(Long id);

    Usuario createUsuario(Usuario usuario);
}
