package com.equipo_84.PetMap.entity;

import com.equipo_84.PetMap.util.Errors;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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

    @Column(nullable = false)
    @NotBlank(message = Errors.VACIO)
    @Size(min = 2, max = 100, message = Errors.LARGO_INVALIDO)
    private String nombre;

    @Column(nullable = false)
    @NotBlank(message = Errors.VACIO)
    @Size(min = 2, max = 100, message = Errors.LARGO_INVALIDO)
    private String especie;

    @Size(min = 2, max = 100, message = Errors.LARGO_INVALIDO)
    private String raza;

    @Min(value = 0, message = Errors.EDAD_MINIMA)
    @Max(value = 150, message = Errors.EDAD_MAXIMA)
    private int edad;

    @Column(nullable = false)
    @NotBlank(message = Errors.VACIO)
    @Size(min = 2, max = 200, message = Errors.LARGO_INVALIDO)
    private String descripcionMascota;

    @Column(nullable = false)
    @NotBlank(message = Errors.VACIO)
    private String urlFoto;

    @OneToOne(targetEntity = Reporte.class, mappedBy = "mascota")
    private Reporte reporte;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

}
