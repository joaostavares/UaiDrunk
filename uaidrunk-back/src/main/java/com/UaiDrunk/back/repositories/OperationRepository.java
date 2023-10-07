package com.UaiDrunk.back.repositories;

import com.UaiDrunk.back.entities.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Long> {
    List<Operation> findAllByDateBetween(LocalDate to, LocalDate from);

}
