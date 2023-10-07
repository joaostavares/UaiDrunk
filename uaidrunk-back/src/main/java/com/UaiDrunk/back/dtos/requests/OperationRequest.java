package com.UaiDrunk.back.dtos.requests;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

@Getter
@Setter
public class OperationRequest {
    @Range(min = 1, max = 6, message = "{valvula.type}")
    private String valvula;
}
