package com.equipo_84.PetMap.entity;

import com.equipo_84.PetMap.entity.enums.Rol;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.equipo_84.PetMap.util.Errors;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = Errors.VACIO)
    @Size(min = 2, max = 100, message = Errors.LARGO_INVALIDO)
    private String nombre;

    @Column(nullable = false, unique = true)
    @NotBlank(message = Errors.VACIO)
    @Email(message = Errors.CORREO_INVALIDO)
    private String correo;

    @Column(nullable = false)
    @NotBlank(message = Errors.VACIO)
    @Size(min = 8, message = Errors.CONTRSENA_INVALIDA)
    private String contrasena;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Rol rol;

    @OneToMany(mappedBy = "usuario")
    private List<Reporte> reportes;

    @OneToMany(mappedBy = "usuario")
    private List<Mascota>  mascotas;

}
