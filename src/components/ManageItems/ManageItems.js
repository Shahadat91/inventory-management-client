import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import UseInventory from "../../hooks/useInventory";

const ManageItems = () => {
  const {inventoryId}= useParams();
  const [inventories, setInventories] = UseInventory([]);

 
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure you want to delete this item?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
  
  return (
    <div className="text-center">
      <h1>Manage Items</h1>
      <div className="inventories-container container mt-5">
          
      {inventories.map((inventory) => (
        <div key={inventory._id}>
            <Card style={{ width: "18rem"}}>
        <Card.Img className="w-50 mx-auto" variant="top" src={inventory.img} />
        <Card.Body>
          <Card.Title>Model: {inventory.name}</Card.Title>
          <Card.Text>Price: $ {inventory.price}</Card.Text>
          <Card.Text>{inventory.description}</Card.Text>
          <Button
             onClick={() => handleDelete(inventory._id)}
            variant="primary">
            Delete
          </Button>
        </Card.Body>
      </Card>
        </div>
      ))}
      </div>
      <div>
          <Link to="/additems/:inventoryId">
          <button className="btn btn-outline-info mt-5 w-25">Add New Item</button>
          </Link>
      </div>
    </div>
  );
};

export default ManageItems;
