package com.equipo_84.PetMap.dto;

import jakarta.validation.constraints.NotBlank;

public record AuthRequestDTO(@NotBlank String username,
                             @NotBlank String password) {
}
