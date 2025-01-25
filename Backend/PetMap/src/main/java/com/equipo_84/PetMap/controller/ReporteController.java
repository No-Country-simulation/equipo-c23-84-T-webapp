package com.equipo_84.PetMap.controller;

import com.equipo_84.PetMap.dto.ReporteDTO;
import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.enums.TipoReporte;
import com.equipo_84.PetMap.service.reporteService.IReporteService;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/reportes")
public class ReporteController {

    private final IReporteService reporteService;

    public ReporteController(IReporteService reporteService) {
        this.reporteService = reporteService;
    }

    @PostMapping("/crear")
    public ResponseEntity<ReporteDTO> guardarReporte(@Valid @RequestBody ReporteDTO reporteDTO) {
        ReporteDTO reporte = reporteService.guardarReporte(reporteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(reporte);
    }

    @GetMapping("/traer")
    public ResponseEntity<List<ReporteDTO>> listarReportes() {
        List<ReporteDTO> reportes = reporteService.listarReportes();
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("traer/{id}/")
    public ResponseEntity<ReporteDTO> reporteXid(@PathVariable Long id) {
        ReporteDTO reporte = reporteService.reporteXid(id);
        if (reporte == null) {
            return ResponseEntity.notFound().build();  // 404 Not Found
        }
        return ResponseEntity.ok(reporte);  // 200 OK
    }

    @GetMapping("/tipo/{tipoReporte}")
    public ResponseEntity<List<ReporteDTO>> reportesXtipo(@PathVariable TipoReporte tipoReporte) {
        List<ReporteDTO> reportes = reporteService.reportesXtipo(tipoReporte);
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("/ubicacion/{ubicacion}")
    public ResponseEntity<List<ReporteDTO>> reportesXubicacion(@PathVariable String ubicacion) {
        List<ReporteDTO> reportes = reporteService.reportesXubicacion(ubicacion);
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("/fecha/{fecha}")
    public ResponseEntity<List<ReporteDTO>> reportesXfecha(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fecha) {
        List<ReporteDTO> reportes = reporteService.reportesXfecha(fecha);
        return ResponseEntity.ok(reportes);
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<ReporteDTO> editarReporte(@PathVariable Long id,
                                                    @Valid @RequestBody ReporteDTO reporte) {
        ReporteDTO reporteEditado = reporteService.editarReporte(id,reporte);
        if (reporteEditado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(reporte);
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> borrarReporte(@PathVariable Long id) {
        boolean borrado = reporteService.borrarReporte(id);
        if (!borrado) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
}
