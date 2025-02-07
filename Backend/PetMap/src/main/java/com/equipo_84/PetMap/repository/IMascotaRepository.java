package com.equipo_84.PetMap.repository;

import com.equipo_84.PetMap.entity.Mascota;
import com.equipo_84.PetMap.entity.Reporte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IMascotaRepository extends JpaRepository<Mascota, Long> {
    @Query("SELECT m FROM Mascota m JOIN FETCH m.reporte WHERE m.especie = :especie")
    List<Mascota> findByEspecieConReporte(@Param("especie") String especie);

    @Query("SELECT m FROM Mascota m JOIN FETCH m.reporte WHERE m.raza = :raza")
    List<Mascota> findByRazaConReporte(@Param("raza") String raza);
}
