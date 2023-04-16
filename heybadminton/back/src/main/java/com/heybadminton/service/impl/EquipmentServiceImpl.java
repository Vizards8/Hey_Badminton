package com.heybadminton.service.impl;

import com.heybadminton.dao.EquipmentMapper;
import com.heybadminton.entity.Equipment;
import com.heybadminton.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    @Autowired
    private EquipmentMapper equipmentMapper;

    @Override
    public List<Equipment> getAllEquipment() {
        return equipmentMapper.getAllEquipment();
    }

    @Override
    public Equipment getEquipmentById(Long id) {
        return equipmentMapper.getEquipmentById(id);
    }

    @Override
    public int insertEquipment(Equipment equipment) {
        return equipmentMapper.insertEquipment(equipment);
    }

    @Override
    public int updateEquipment(Equipment equipment) {
        return equipmentMapper.updateEquipment(equipment);
    }

    @Override
    public int deleteEquipmentById(Long id) {
        return equipmentMapper.deleteEquipmentById(id);
    }

}

