import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItems = (event) => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ 
      console.log(data);
      const url = `https://pacific-sea-12697.herokuapp.com/inventory`;
      fetch(url, {
         method:'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result);
          toast('item added successfully');
      })

      const url2 = `https://pacific-sea-12697.herokuapp.com/myItems`;
      fetch(url2, {
         method:'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result);
          //toast('item added successfully');
      })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Hi, Please add a inventory.</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
{/*       
      <input className='mb-3' value={user?.email}  placeholder='Email' {...register("email", { required: true, maxLength: 50 })} />


       */}
      
      <textarea className='mb-3' placeholder='Description' {...register("description", { required: true })} />
      <input className='mb-3' placeholder='Price' type="number" {...register("price", { required: true })} />
      <input className='mb-3' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
      <input type="submit" value="Add Items" />
    </form>
        </div>
    );
};

export default AddItems;