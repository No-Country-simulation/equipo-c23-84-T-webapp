package com.equipo_84.PetMap.entity;

import com.equipo_84.PetMap.entity.enums.TipoReporte;
import com.equipo_84.PetMap.util.Errors;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;


import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reporte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoReporte tipo;

    @Column(nullable = false, length = 255)
    @NotNull(message = Errors.VACIO)
    @Size(min = 1, max = 255, message = Errors.LARGO_INVALIDO)
    private String ubicacion;

    @Column(nullable = false)
    @NotNull(message = Errors.VACIO)
    @PastOrPresent(message = Errors.FECHA_INVALIDA)
    private LocalDate fecha;

    @ManyToOne
    private Usuario usuario;

    @OneToOne
    private Mascota mascota;

}
