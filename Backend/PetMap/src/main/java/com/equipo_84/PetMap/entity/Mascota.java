package com.equipo_84.PetMap.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="mascotas")
public class Mascota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String especie;
    private String raza;
    private String descripcion;
    private String urlFoto;

    @OneToOne(targetEntity = Reporte.class, mappedBy = "mascota")
    private Reporte reporte;
}
