
FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/PetMap-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} PetMap.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","PetMap.jar"]