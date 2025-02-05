package com.equipo_84.PetMap.service.UsuarioService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.dto.UsuarioDTO;
import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.Usuario;
import com.equipo_84.PetMap.repository.IUsuarioRepository;
import com.equipo_84.PetMap.util.Mappers.ReporteMapper;
import com.equipo_84.PetMap.util.Mappers.UsuarioMapper;
import com.equipo_84.PetMap.util.usuarioExceptions.UsuarioNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @Autowired
    private ReporteMapper reporteMapper;



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

        usuarioExistente.setCorreo(usuario.getCorreo());
        usuarioExistente.setUsername(usuario.getUsername());

        return usuarioMapper.convertirAUsuarioDTO(usuarioRepository.save(usuarioExistente));
    }

    @Override
    @Transactional
    public void deleteUsuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNotFoundException("Usuario no encontrado con ID: " + id));

        usuarioRepository.delete(usuario);
    }

    @Override
    @Transactional
    public Usuario createUsuario(Usuario usuario) {

        usuario.setPassword(this.encriptPassword(usuario.getPassword()));
        return usuarioRepository.save(usuario);
    }

    @Override
    public String encriptPassword(String password) {
        return new BCryptPasswordEncoder().encode(password);
    }

    @Override
    public List<ReporteDTO> reporteXusuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        List<Reporte> listaReportes=usuario.getReports();
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Reporte reporte : listaReportes) {
            ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(reporte);
            listaReportesDTO.add(reporteDTO);
        }

        return listaReportesDTO;
    }
}
