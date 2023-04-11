import { useState } from 'react';
import EquipmentItem from './EquipmentItem';

import myImage from "./logo.png";

const Equip = () => {
  const equipment = [
    {
      name: 'Badminton Racket',
      description: 'A lightweight racket used to hit the shuttlecock across the net.',
      image: myImage,
      price: 50.00
    },
    {
      name: 'Shuttlecock',
      description: 'A feather or plastic projectile hit back and forth over the net by players.',
      image: myImage,
      price: 10.00
    },
    {
      name: 'Badminton Shoes',
      description: 'Specialized shoes with good grip to help players move quickly and change direction.',
      image: myImage,
      price: 75.00
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  }

  return (
    <div>
      <h2>Badminton Equipment</h2>
      <p>Here is a list of the equipment available for use:</p>
      <div className="equipment-list">
        {equipment.map(item => (
          <EquipmentItem key={item.name} item={item} onSelect={handleSelectItem} />
        ))}
      </div>
      {selectedItem && (
        <p>You have selected: {selectedItem.name}</p>
      )}
    </div>
  )
}

export default Equip;
