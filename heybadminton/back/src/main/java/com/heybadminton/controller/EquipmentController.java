package com.heybadminton.controller;

import com.heybadminton.entity.Equipment;
import com.heybadminton.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipments")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping
    public List<Equipment> getAllEquipment() {
        return equipmentService.getAllEquipment();
    }

    @GetMapping("/{id}")
    public Equipment getEquipmentById(@PathVariable("id") Long id) {
        return equipmentService.getEquipmentById(id);
    }

    @PostMapping
    public int addEquipment(@RequestBody Equipment equipment) {
        return equipmentService.addEquipment(equipment);
    }

    @PutMapping
    public int updateEquipment(@RequestBody Equipment equipment) {
        return equipmentService.updateEquipment(equipment);
    }

    @DeleteMapping("/{id}")
    public int deleteEquipmentById(@PathVariable Long id) {
        return equipmentService.deleteEquipmentById(id);
    }
}
