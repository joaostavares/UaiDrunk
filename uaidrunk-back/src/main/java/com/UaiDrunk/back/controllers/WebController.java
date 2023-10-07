package com.UaiDrunk.back.controllers;

import com.UaiDrunk.back.dtos.requests.OperationRequest;
import com.UaiDrunk.back.dtos.responses.OperationResponse;
import com.UaiDrunk.back.entities.Operation;
import com.UaiDrunk.back.services.ArduinoService;
import com.UaiDrunk.back.services.WebService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;


@RestController
@RequestMapping("/web")
public class WebController {
    private final WebService webService;

    private final ModelMapper modelMapper;

    private final ArduinoService arduinoService;

    public WebController(WebService webService, ModelMapper modelMapper, ArduinoService arduinoService) {
        this.webService = webService;
        this.modelMapper = modelMapper;
        this.arduinoService = arduinoService;
    }

    @PostMapping
    public ResponseEntity<OperationResponse> post(@RequestBody @Valid OperationRequest operationRequest) {
        Operation operation = modelMapper.map(operationRequest, Operation.class);
        Operation operacao = webService.saveOperation(operation);
        arduinoService.valvulaReceiver(operacao);
        OperationResponse operationResponse = modelMapper.map(operacao, OperationResponse.class);
        return new ResponseEntity<>(operationResponse, HttpStatus.OK);
    }
}
