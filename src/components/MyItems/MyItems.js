import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();


    const getMyItems = async() =>{
        const email = user?.email;
        const url = `https://pacific-sea-12697.herokuapp.com/myItems?email=${email}`;
        try{
            const {data} = await axios.get(url,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                } 
            });
            setMyItems(data);
        }
        catch(error){
            console.log(error.message);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/signin');
            }
        }
    }

    useEffect(()=>{
        
        getMyItems();

    },[user]);

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure you want to delete this item?");
        if (proceed) {
          const url = `https://pacific-sea-12697.herokuapp.com/myItems/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remaining = myItems.filter(
                (myItem) => myItem._id !== id
              );
              setMyItems(remaining);
            });
        }
      };

    return (
        <div>
            <h1>My Items:{myItems.length} </h1>
            <div className="inventories-container container mt-5">
          
          {myItems.map((myItem) => (
            <div key={myItem._id}>
                <Card style={{ width: "18rem"}}>
            <Card.Img className="w-50 mx-auto" variant="top" src={myItem.img} />
            <Card.Body>
              <Card.Title>Model: {myItem.name}</Card.Title>
              <Card.Text>Price: $ {myItem.price}</Card.Text>
              <Card.Text>{myItem.description}</Card.Text>
              <Button
                 onClick={() => handleDelete(myItem._id)}
                variant="primary">
                Delete
              </Button>
            </Card.Body>
          </Card>
            </div>
          ))}
          </div>
            
        </div>
    );
};

export default MyItems;