package com.UaiDrunk.back.services;

import com.UaiDrunk.back.entities.Operation;

public interface ArduinoService {
    void valvulaReceiver(Operation operation);

    String valvulaSender();
}
