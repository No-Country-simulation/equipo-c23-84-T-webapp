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
    public ResponseEntity<Reporte> guardarReporte(@Valid @RequestBody ReporteDTO reporteDTO) {
        Reporte reporte = reporteService.guardarReporte(reporteDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(reporte);
    }

    @GetMapping("/traer")
    public ResponseEntity<List<Reporte>> listarReportes() {
        List<Reporte> reportes = reporteService.listarReportes();
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("/traer/{id}")
    public ResponseEntity<Reporte> reporteXid(@PathVariable Long id) {
        Reporte reporte = reporteService.reporteXid(id);
        if (reporte == null) {
            return ResponseEntity.notFound().build();  // 404 Not Found
        }
        return ResponseEntity.ok(reporte);  // 200 OK
    }

    @GetMapping("/tipo/{tipo}")
    public ResponseEntity<List<Reporte>> reportesXtipo(@PathVariable TipoReporte tipoReporte) {
        List<Reporte> reportes = reporteService.reportesXtipo(tipoReporte);
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("/ubicacion/{ubicacion}")
    public ResponseEntity<List<Reporte>> reportesXubicacion(@PathVariable String ubicacion) {
        List<Reporte> reportes = reporteService.reportesXubicacion(ubicacion);
        return ResponseEntity.ok(reportes);
    }

    @GetMapping("/fecha/{fecha}")
    public ResponseEntity<List<Reporte>> reportesXfecha(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fecha) {
        List<Reporte> reportes = reporteService.reportesXfecha(fecha);
        return ResponseEntity.ok(reportes);
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<Reporte> editarReporte(@Valid @RequestBody Reporte reporte) {
        Reporte reporteEditado = reporteService.editarReporte(reporte);
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
