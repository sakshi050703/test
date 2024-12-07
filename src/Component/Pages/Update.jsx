import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const { register, handleSubmit, reset, setValue } = useForm()
  const { client } = useParams()
  const navigation = useNavigate()
  async function getDatas() {
    const result = await axios.get(`http://localhost:8000/student/${client}`)
    setValue('id', result.data.id)
    setValue('name', result.data.name)
    setValue('company_name', result.data.company_name)
    setValue('email', result.data.email)
    setValue('contact', result.data.contact)
    setValue('role', result.data.role)

  }
  useEffect(() => {
    getDatas()
  })

  const updateData = () => {
    axios.put(`http://localhost:8000/student/${client}`)
    alert('Update')
    reset()
    navigation('/show')
  }
  return (
    <div>
      <div>
        <h3 className='mt-5'>Client Management System</h3>
        <form onSubmit={handleSubmit(updateData)}>
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

            <button type="submit" className='btn btn-success me-2 mt-3'>SUBMIT</button>
            <button className='btn btn-danger me-2 mt-3'>RESET</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Update