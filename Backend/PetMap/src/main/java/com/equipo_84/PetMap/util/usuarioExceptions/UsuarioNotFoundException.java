package com.equipo_84.PetMap.util.usuarioExceptions;

public class UsuarioNotFoundException extends RuntimeException {

    public UsuarioNotFoundException(String message) {
        super(message); //para mandarle solo mensaje
    }

    public UsuarioNotFoundException(String message, Throwable cause) {
        super(message, cause);  //par mndarle el id, x ej
    }

}
