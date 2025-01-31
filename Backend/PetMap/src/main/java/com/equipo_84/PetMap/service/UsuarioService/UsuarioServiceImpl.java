package com.equipo_84.PetMap.service.UsuarioService;

import com.equipo_84.PetMap.dto.UsuarioDTO;
import com.equipo_84.PetMap.entity.Usuario;
import com.equipo_84.PetMap.repository.IUsuarioRepository;
import com.equipo_84.PetMap.util.Mappers.UsuarioMapper;
import com.equipo_84.PetMap.util.usuarioExceptions.UnauthorizedAccessException;
import com.equipo_84.PetMap.util.usuarioExceptions.UsuarioNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;

    private Usuario getAuthenticatedUser() {
        return (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @Override
    public List<UsuarioDTO> findAll() {
        return usuarioRepository.findAll().stream()
                .map(usuario -> usuarioMapper.convertirAUsuarioDTO(usuario))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<UsuarioDTO> findById(Long id) {
        return usuarioRepository.findById(id).map(usuarioMapper::convertirAUsuarioDTO);
    }

    @Override
    @Transactional
    public UsuarioDTO updateUsuario(Long id, UsuarioDTO usuario) {

        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException("Usuario no encontrado con ID: " + id));

        // Obtener el usuario autenticado
        Usuario authenticatedUser = getAuthenticatedUser();
        Long authenticatedUserId = authenticatedUser.getId();

        // Verificar si el usuario autenticado es el mismo que el usuario que quiere editar
        if (!authenticatedUserId.equals(id)) {
            throw new UnauthorizedAccessException("No tienes permiso para editar este usuario");
        }

        if (usuario.getUsername() != null) {
            usuarioExistente.setUsername(usuario.getUsername());
        }
        if (usuario.getCorreo() != null) {
            usuarioExistente.setCorreo(usuario.getCorreo());
        }
        /*
        if (usuario.getPassword() != null) {
            usuarioExistente.setPassword(usuario.getPassword());
        }
         */
        if (usuario.getRol() != null) {
            usuarioExistente.setRol(usuario.getRol());
        }

        return usuarioMapper.convertirAUsuarioDTO(usuarioRepository.save(usuarioExistente));
    }

    @Override
    @Transactional
    public void deleteUsuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException("Usuario no encontrado con ID: " + id));

        // Obtener el usuario autenticado
        Usuario authenticatedUser = getAuthenticatedUser();
        Long authenticatedUserId = authenticatedUser.getId();

        if (!authenticatedUserId.equals(id)) {
            throw new UnauthorizedAccessException("No tienes permiso para eliminar este usuario");
        }

        usuarioRepository.delete(usuario);
    }

    @Override
    @Transactional
    public Usuario createUsuario(Usuario usuario) {
        // Validación adicional
        if (usuarioRepository.existsByCorreo(usuario.getCorreo())) {
            throw new RuntimeException("Correo ya registrado");  // Aca puedo crear una exc
        }

        return usuarioRepository.save(usuario);
    }
}
