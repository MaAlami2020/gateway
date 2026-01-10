package com.webapp1a.gateway.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaController {
    
    @RequestMapping(value = "/new/**")
    public String forward() {
        return "redirect:/new/index.html";
    }
}
