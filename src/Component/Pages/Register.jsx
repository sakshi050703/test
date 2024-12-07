import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const { register, handleSubmit, reset } = useForm()
  const navigation = useNavigate()
  async function getData(data) {
    axios.post('http://localhost:8000/student', data)
    alert('Submit Data')
    navigation('/show')
  }

  return (
    <div>
      <h3 className='mt-5'>Client Management System</h3>
      <form onSubmit={handleSubmit(getData)}>
        <div>
          <label className='mt-3'>Client ID : </label>
          <input type='text'
            className='form-control w-25 mx-auto mt-2 mb-2'
            {...register('id')}
          />

          <label >Client Name : </label>
          <input type='text'
            className='form-control w-25 mx-auto'
            {...register('name')}
          /><br />

          <label >Company Name : </label>
          <input type='text'
            className='form-control w-25 mx-auto '
            {...register('company_name')}
          /><br />

          <label>Email : </label>
          <input type='text'
            className='form-control w-25 mx-auto'
            {...register('email')}
          /><br />

          <label>Contact : </label>
          <input type='text'
            className='form-control w-25 mx-auto'
            {...register('contact')}
          /><br />

          <label>Role : </label>
          <input type='text'
            className='form-control w-25 mx-auto '
            {...register('role')}
          />

          <button className='btn btn-success me-2 mt-3'>SUBMIT</button>
          <button className='btn btn-danger me-2 mt-3'>RESET</button>
        </div>
      </form>
    </div>
  )
}

export default Register