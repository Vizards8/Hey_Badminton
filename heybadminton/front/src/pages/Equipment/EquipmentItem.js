import React from 'react';
import './EquipmentItem.css';

const EquipmentItem = ({ item, onSelect }) => {
  return (
    <div className="equipment-item">
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} width="300" />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => onSelect(item)}>Select</button>
    </div>
  );
}

export default EquipmentItem;
