import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { _id, name, img, description, price } = inventory;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    
      <Card style={{ width: "18rem"}}>
        <Card.Img className="w-50 mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title>Model: {name}</Card.Title>
          <Card.Text>Price: $ {price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button
            onClick={() => navigateToServiceDetail(_id)}
            variant="primary">
            Update
          </Button>
        </Card.Body>
      </Card>
    
  );
};

export default Inventory;
