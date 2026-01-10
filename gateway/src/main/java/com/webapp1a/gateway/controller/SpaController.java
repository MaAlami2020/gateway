package com.webapp1a.gateway.controller;

import java.net.URI;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class SpaController {

    @Bean
    public RouterFunction<ServerResponse> spaRouter() {
        return RouterFunctions.route(
            RequestPredicates.GET("/new"),
            req -> ServerResponse.permanentRedirect(URI.create("/new/index.html")).build()
        );
    }
}