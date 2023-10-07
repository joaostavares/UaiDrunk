package com.UaiDrunk.back.services.impl;

import com.UaiDrunk.back.entities.Operation;
import com.UaiDrunk.back.services.ArduinoService;
import org.springframework.stereotype.Service;

@Service
public class ArduinoServiceImpl implements ArduinoService {

    private String VALVULA = "0";

    private long LAST_ID = -1;

    private boolean LAST_OPERATION_DONE = true;


    public String valvulaSender() {
        if (!LAST_OPERATION_DONE) {
            LAST_OPERATION_DONE = true;
            return VALVULA;
        }
        else {
            VALVULA = "0";
            return VALVULA;
        }
    }

    public void valvulaReceiver(Operation operation) {
        if (LAST_ID != operation.getId()) {
            LAST_ID = operation.getId();
            VALVULA = operation.getValvula();
            LAST_OPERATION_DONE = false;
        }
    }
}
