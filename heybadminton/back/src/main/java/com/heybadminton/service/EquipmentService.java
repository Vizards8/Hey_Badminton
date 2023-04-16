package com.heybadminton.service;

import java.util.List;

import com.heybadminton.entity.Equipment;

public interface EquipmentService {

    List<Equipment> getAllEquipment();

    Equipment getEquipmentById(Long id);

    int insertEquipment(Equipment equipment);

    int updateEquipment(Equipment equipment);

    int deleteEquipmentById(Long id);

}
