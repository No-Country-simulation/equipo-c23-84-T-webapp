# Etapa de construcción: Compilar el proyecto con Maven
FROM maven:3.8.6-openjdk-17-slim AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y el código fuente
COPY pom.xml .
COPY src ./srcW

# Ejecuta Maven para compilar el proyecto y generar el JAR
RUN mvn clean package -DskipTests

# Etapa de ejecución: Usar solo el JAR generado
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo JAR desde la etapa de construcción
COPY --from=build /app/target/*.jar PetMap.jar

# Expón el puerto
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app/PetMap.jar"]