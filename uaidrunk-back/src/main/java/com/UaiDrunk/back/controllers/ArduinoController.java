package com.UaiDrunk.back.controllers;

import com.UaiDrunk.back.services.ArduinoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/arduino")
public class ArduinoController {
    private final ArduinoService arduinoService;

    public ArduinoController(ArduinoService arduinoService) {
        this.arduinoService = arduinoService;
    }

    @GetMapping
    public ResponseEntity<String> status() {
        return new ResponseEntity<>(arduinoService.valvulaSender(), HttpStatus.OK);
    }
}
