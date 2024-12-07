import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {
  const [name, setName] = useState([])
  async function Data() {
    const response = await axios.get('http://localhost:8000/student')
    const result = await response.data
    setName(result)
  }
  useEffect(() => {
    Data()
  }, [])
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>client_id</th>
            <th>client_name</th>
            <th>company_name</th>
            <th>email</th>
            <th>contact</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {
            name.map((stu, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stu.id}</td>
                  <td>{stu.name}</td>
                  <td>{stu.company_name}</td>
                  <td>{stu.email}</td>
                  <td>{stu.contact}</td>
                  <td>{stu.role}</td>
                  <td>
                    <NavLink to={`/update/${stu.id}`}>
                      <button type="submit" className='btn btn-success me-2' >Edit</button>
                    </NavLink>
                    <NavLink to={`/delete/${stu.id}`}><button type="reset" className='btn btn-warning'>Delete</button></NavLink>
                  </td>
                </tr>
              )

            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default Show