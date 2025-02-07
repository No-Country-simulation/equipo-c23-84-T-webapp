package com.equipo_84.PetMap.service.reporteService;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.Usuario;
import com.equipo_84.PetMap.entity.enums.TipoReporte;
import com.equipo_84.PetMap.repository.IReporteRepository;
import com.equipo_84.PetMap.service.UsuarioService.IUsuarioService;
import com.equipo_84.PetMap.service.mascotaService.IMascotaService;
import com.equipo_84.PetMap.util.Errors;
import com.equipo_84.PetMap.util.Mappers.ReporteMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
@Service
public class ReporteService implements IReporteService{

    private final IMascotaService mascotaService;
    private final IReporteRepository reporteRepository;
    private final ReporteMapper reporteMapper;
    private final IUsuarioService usuarioService;

    public ReporteService(IMascotaService mascotaService, IReporteRepository reporteRepository, ReporteMapper reporteMapper, IUsuarioService usuarioService) {
        this.mascotaService = mascotaService;
        this.reporteRepository = reporteRepository;
        this.reporteMapper = reporteMapper;
        this.usuarioService = usuarioService;
    }

    @Transactional
    @Override
    public ReporteDTO guardarReporte(ReporteDTO reporteDTO) {
        Usuario usuario = new Usuario();
        usuario.setId(reporteDTO.getIdUsuario());
        usuario.setUsername(reporteDTO.getNombreUsuario());
        usuario.setCorreo(reporteDTO.getCorreoUsuario());


        Mascota nuevaMascota = new Mascota();
        nuevaMascota.setUsuario(usuario);
        nuevaMascota.setNombre(reporteDTO.getNombreMascota());
        nuevaMascota.setEspecie(reporteDTO.getEspecieMascota());
        nuevaMascota.setRaza(reporteDTO.getRazaMascota());
        nuevaMascota.setDescripcionMascota(reporteDTO.getDescripcionMascota());
        nuevaMascota.setUrlFoto(reporteDTO.getUrlFotoMascota());

        Mascota mascotaGuardada = mascotaService.guardarMascota(nuevaMascota);

        Reporte reporte = new Reporte();
        reporte.setUsuario(usuario);
        reporte.setMascota(mascotaGuardada);
        reporte.setTipo(reporteDTO.getTipoReporte());
        reporte.setContacto(reporteDTO.getContacto());
        reporte.setFecha(reporteDTO.getFechaReporte());
        reporte.setUbicacion(reporteDTO.getUbicacionReporte());
        reporteRepository.save(reporte);
        reporteDTO= reporteMapper.convertirAReporteDTO(reporte);
        return reporteDTO;
    }

    @Override
    public List<ReporteDTO> listarReportes() {

        List<Reporte> listaReportes=reporteRepository.findAll();
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Reporte reporte : listaReportes) {
            ReporteDTO reporteDTO= reporteMapper.convertirAReporteDTO(reporte);
            listaReportesDTO.add(reporteDTO);
        }
        return listaReportesDTO;
    }

    @Override
    public ReporteDTO reporteXid(Long id) {
        Reporte reporte= reporteRepository.findById(id).orElse(null);

        ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(reporte);

        return reporteDTO;
    }

    @Override
    public List<ReporteDTO> reportesXtipo(TipoReporte tipoReporte) {

        List<Reporte> listaReportes=reporteRepository.findByTipo(tipoReporte);
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Reporte reporte : listaReportes) {
            ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(reporte);
            listaReportesDTO.add(reporteDTO);
        }

        return listaReportesDTO;
    }

    @Override
    public List<ReporteDTO> reportesXubicacion(String ubicacion) {

        List<Reporte> listaReportes=reporteRepository.findByUbicacion(ubicacion);
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Reporte reporte : listaReportes) {
            ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(reporte);
            listaReportesDTO.add(reporteDTO);
        }

        return listaReportesDTO;
    }

    @Override
    public List<ReporteDTO> reportesXfecha(LocalDate fecha) {

        List<Reporte> listaReportes=reporteRepository.findByFecha(fecha);
        List<ReporteDTO> listaReportesDTO=new ArrayList<ReporteDTO>();
        for (Reporte reporte : listaReportes) {
            ReporteDTO reporteDTO=reporteMapper.convertirAReporteDTO(reporte);
            listaReportesDTO.add(reporteDTO);
        }

        return listaReportesDTO;
    }

    @Override
    public List<ReporteDTO> reportesXespecie(String especie) {

        return mascotaService.mascotaXespecie(especie);
    }

    @Override
    public List<ReporteDTO> reportesXraza(String raza) {

        return mascotaService.mascotaXraza(raza);
    }

    @Transactional
    @Override
    public ReporteDTO editarReporte(Long id,ReporteDTO reporteDTO) {
        Usuario usuario = new Usuario();
        usuario.setId(reporteDTO.getIdUsuario());
        usuario.setUsername(reporteDTO.getNombreUsuario());
        usuario.setCorreo(reporteDTO.getCorreoUsuario());


        Mascota nuevaMascota = new Mascota();
        nuevaMascota.setId(reporteDTO.getIdMascota());
        nuevaMascota.setUsuario(usuario);
        nuevaMascota.setNombre(reporteDTO.getNombreMascota());
        nuevaMascota.setEspecie(reporteDTO.getEspecieMascota());
        nuevaMascota.setRaza(reporteDTO.getRazaMascota());
        nuevaMascota.setDescripcionMascota(reporteDTO.getDescripcionMascota());
        nuevaMascota.setUrlFoto(reporteDTO.getUrlFotoMascota());

        Mascota mascotaGuardada = mascotaService.guardarMascota(nuevaMascota);

        Reporte reporte = new Reporte();
        reporte.setId(reporteDTO.getIdReporte());
        reporte.setUsuario(usuario);
        reporte.setMascota(mascotaGuardada);
        reporte.setTipo(reporteDTO.getTipoReporte());
        reporte.setContacto(reporteDTO.getContacto());
        reporte.setFecha(reporteDTO.getFechaReporte());
        reporte.setUbicacion(reporteDTO.getUbicacionReporte());
        reporteRepository.save(reporte);
        reporteDTO= reporteMapper.convertirAReporteDTO(reporte);
        return reporteDTO;
    }

    @Override
    public boolean borrarReporte(Long id) {
        if (!reporteRepository.existsById(id)) {
            throw new NoSuchElementException(String.format(Errors.REPORT_NOT_FOUND, id));
        }
        reporteRepository.deleteById(id);
        return true;
    }

    @Override
    public List<ReporteDTO> reportesXusuario(Long id) {
        return usuarioService.reporteXusuario(id);
    }

}
