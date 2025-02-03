package com.equipo_84.PetMap.repository;


import com.equipo_84.PetMap.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByCorreo(String correo);

    Optional<Usuario> findUserEntityByUsername(String username);
}
