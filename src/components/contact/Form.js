import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
  let {register,handleSubmit,formState:{errors},reset}=useForm()

  let handleContact = (data) => {
  console.log(data);
  axios.post("https://portfolio-fcc63-default-rtdb.firebaseio.com/contact.json",data)
  reset()
}
return (
  <>
    <form action="" onSubmit={handleSubmit(handleContact)}>
      <label className='form-label' htmlFor="">Enter Name</label>
      <input type="text" name="Name" {...register('Name', { required: "name is required" })} className='form-control' />
      <p className='text-danger'>{errors?.Name && errors.Name.message}</p>
      <label className='form-label' htmlFor="">Enter Email</label>
      <input type="text" name="Email" {...register('Email', { required: "email is required" })} className='form-control' />
      <p className='text-danger'>{errors?.Email && errors.Email.message}</p>
      <label className='form-label' htmlFor="">Enter Phone</label>
      <input type="text" name="Phone" {...register('Phone', { required: "phone is required",minLength:{value:10,message:"min 10 digit required"},maxLength:{value:10,message:"max 10 digit required"} })} className='form-control' />
      <p className='text-danger '>{errors?.Phone && errors.Phone.message}</p>
      <br />
      <input className='btn btn-success' type="Submit" />
    </form>
  </>
)
}

export default Form