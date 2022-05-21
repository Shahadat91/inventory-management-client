import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId =>{
    const [inventory, setInventory] = useState({});
    //console.log(inventoryId);
    useEffect( ()=>{
        const url = `https://pacific-sea-12697.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    },[inventoryId]);
    return[inventory,setInventory]

}

export default useInventoryDetail;