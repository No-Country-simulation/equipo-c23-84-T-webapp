package com.equipo_84.PetMap.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;

@Getter @Setter
@Entity
public class Reporte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Usuario usuario;
    private String tipo;
    @OneToOne
    private Mascota mascota;
    private String ubicacion;
    private LocalDate fecha;

    public Reporte() {
    }

    public Reporte(long id, Usuario usuario, String tipo, Mascota mascota, String ubicacion, LocalDate fecha) {
        this.id = id;
        this.usuario = usuario;
        this.tipo = tipo;
        this.mascota = mascota;
        this.ubicacion = ubicacion;
        this.fecha = fecha;
    }
}
