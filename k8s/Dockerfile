#FRONTEND
#selection of the image base
FROM node:18-alpine AS builder

#definition of the work directory in /project to execute commands
WORKDIR /project/Store-frontend

# Copiar SOLO el frontend
COPY Store-frontend/package*.json ./

#dependencies app need are installed
#RUN npm install

#files from frontend are copied on work directory
COPY Store-frontend/ .


#files to production are generated in the specific route "new"
RUN npm run build -- --base=href=/new/

##BACKEND

#addition of java image
FROM maven:3.9.6-eclipse-temurin-21 AS gateway

#definition of the work directory in /project to execute commands
WORKDIR /project

#project dependencies are copied on the work directory
COPY pom.xml /project/

#project dependencies are downloaded
RUN mvn clean verify --fail-never

#backend project code is copied on the work directory
COPY gateway/src /project/src

# files are copied
# origin --> dist/frontend
# destiny --> src/main/resources/static/(new)
COPY --from=builder /project/dist/store-frontend /project/src/main/resources/static/new

# app building once the code is compiled
RUN mvn clean package -DskipTests=true

## image for the app container
FROM eclipse-temurin:21-jdk

# definition of the work directory where JAR file finds
WORKDIR /usr/src/app/

#RUN curl -LJO https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
#&& chmod +x /usr/src/app/wait-for-it.sh

# JAR file of compilation container is copied on JAR work directory
COPY --from=gateway /project/target/*.jar /usr/src/app/
COPY --from=gateway /project/target/gateway-0.0.1-SNAPSHOT.jar /usr/src/app/appGateway.jar

EXPOSE 8442

# Espera a MySQL y Redis antes de arrancar la app
ENTRYPOINT ["java", "-jar", "appGateway.jar"]