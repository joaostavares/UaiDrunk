package com.UaiDrunk.back.services.impl;

import com.UaiDrunk.back.entities.Operation;
import com.UaiDrunk.back.repositories.OperationRepository;
import com.UaiDrunk.back.services.WebService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service

public class WebServiceImpl implements WebService {
    private final OperationRepository operationRepository;

    public WebServiceImpl(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    public Operation saveOperation(Operation operation) {
        operation.setDate(LocalDate.now());
        return operationRepository.save(operation);
    }
}
