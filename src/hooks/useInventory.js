import { useEffect, useState } from "react";

const UseInventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://pacific-sea-12697.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default UseInventory;
