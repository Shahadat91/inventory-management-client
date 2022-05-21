import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useInventoryDetail from "../../hooks/UseInventoryDetail";

const InventoryDetail = () => {
  const [inventoryData, setInventoryData] = useState(0);

const { inventoryId } = useParams();
//console.log(inventoryId);

const [inventory] = useInventoryDetail(inventoryId);

useEffect(()=>{
  setInventoryData(inventory);
},[,inventory]);


//Handle Delivered Item
const deliveredItem = () =>{
  const quantity = parseInt(inventoryData.quantity) - 1;
  //const updateQuantity = {quantity};
  const url = `http://localhost:5000/updateq/${inventoryId}`;
  fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({quantity})
  })
  .then(res => res.json())
  .then(data => {
    console.log('success', data);
    setInventoryData({...inventoryData, quantity: quantity });
    toast('item delivered successfully');
  })
}


//Add Item
const updateItem = event =>{
   event.preventDefault();
   const quantity = parseInt(inventoryData.quantity) + parseInt(event.target.quantity.value);
   const url = `http://localhost:5000/updateq/${inventoryId}`;

   fetch(url, {
     method: 'PUT',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({quantity})
   })
   .then(res => res.json())
   .then(data => {
     console.log('success', data);
     setInventoryData({...inventoryData, quantity: quantity });
     toast('your quantity added successfully');
     event.target.reset();
   });


}





  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "22rem" }}>
        <Card.Img className="w-50 mx-auto" variant="top" src={inventory.img} />
        <Card.Body>
          <Card.Title>Model: {inventory.name}</Card.Title>
          <Card.Title>Manufacturer: {inventory.supplierName}</Card.Title>
          <Card.Title className="text-primary">
            Total Items in Stock:   ${inventoryData.quantity}pcs
          </Card.Title>
          <Card.Text className="mb-0">
            {" "}
            <small>Price: $ {inventory.price}</small>{" "}
          </Card.Text>
          <Card.Text className="mb-0">
            {" "}
            <small>Color: {inventory.color}</small>{" "}
          </Card.Text>
          <Card.Text className="mb-0">
            {" "}
            <small>Material in Use: {inventory.material}</small>{" "}
          </Card.Text>
          <Card.Text className="mb-0">
            {" "}
            <small>Special Feature: {inventory.specialFeature}</small>{" "}
          </Card.Text>
          <Card.Text>{inventory.description}</Card.Text>
         
        </Card.Body>
          <Button onClick={deliveredItem} variant="primary">Delivered</Button>
          <br />
          <Form onSubmit={updateItem}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" name="quantity" placeholder="add quantity" required/>
                    </Form.Group>
                    <button className='btn btn-danger w-100'>Add Quantity</button>
                </Form>
      </Card>
    </div>
  );
};

export default InventoryDetail;
