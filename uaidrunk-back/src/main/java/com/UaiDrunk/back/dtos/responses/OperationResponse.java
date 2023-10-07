package com.UaiDrunk.back.dtos.responses;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class OperationResponse {
    private long id;
    private String valvula;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate date;
}
