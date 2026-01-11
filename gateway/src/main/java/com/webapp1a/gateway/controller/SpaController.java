package com.webapp1a.gateway.controller;

import java.net.URI;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class SpaController {

    @Bean
    public RouterFunction<ServerResponse> spaRouter() {
        return RouterFunctions.route(
            RequestPredicates.GET("/new/**")
                .and(RequestPredicates.accept(MediaType.TEXT_HTML)),
            request -> ServerResponse.ok()
                .contentType(MediaType.TEXT_HTML)
                .bodyValue(new ClassPathResource("static/new/src/index.html"))
        );
    }
}