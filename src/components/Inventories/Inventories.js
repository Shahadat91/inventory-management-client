import React from "react";
import UseInventory from "../../hooks/useInventory";
import Inventory from "../Inventory/Inventory";
import './Inventories.css';

const Inventories = () => {
  const [inventories, setInventories] = UseInventory([]);
  //console.log(inventories);
  return (
    <div className="inventories-container container mt-5">
      {inventories?.map((inventory) => (
        <Inventory key={inventory._id} inventory={inventory}></Inventory>
      ))}
    </div>
  );
};

export default Inventories;
