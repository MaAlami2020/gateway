# FRONTEND
FROM node:20-alpine AS frontend-builder
WORKDIR /project
COPY store-frontend/ .
RUN npm ci
RUN npm run build --prod --base-href=/new/

# BACKEND
FROM maven:3.9.6-eclipse-temurin-21 AS backend-builder
WORKDIR /project
COPY pom.xml .
RUN mvn dependency:go-offline
COPY gateway/src ./src
# Copiar frontend compilado al src/main/resources/static/new antes del package
COPY --from=frontend-builder /project/dist/store-frontend ./src/main/resources/static/new
RUN mvn clean package -DskipTests

# CONTAINER FINAL
FROM eclipse-temurin:21-jdk
WORKDIR /usr/src/app
COPY --from=backend-builder /project/target/*.jar ./appGateway.jar
EXPOSE 8442
ENTRYPOINT ["java", "-jar", "appGateway.jar"]
