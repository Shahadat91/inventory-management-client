import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId =>{
    const [inventory, setInventory] = useState({});
    //console.log(inventoryId);
    useEffect( ()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    },[inventoryId]);
    return[inventory,setInventory]

}

export default useInventoryDetail;