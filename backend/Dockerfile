#base image
FROM openjdk:8
EXPOSE 9090
ADD target/trashtocash-docker.jar trashtocash-docker.jar
ENTRYPOINT ["java","-jar","/trashtocash-docker.jar"]