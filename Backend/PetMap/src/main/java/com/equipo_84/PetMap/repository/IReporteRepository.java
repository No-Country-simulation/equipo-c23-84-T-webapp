package com.equipo_84.PetMap.repository;

import com.equipo_84.PetMap.entity.Reporte;
import com.equipo_84.PetMap.entity.enums.TipoReporte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IReporteRepository extends JpaRepository<Reporte,Long> {
    List<Reporte> findByTipo(TipoReporte tipo);
    List<Reporte> findByUbicacion(String ubicacion);
    List<Reporte> findByFecha(LocalDate fecha);



}
