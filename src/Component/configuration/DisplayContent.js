import React, { useState, useEffect } from 'react'
import './DisplayContent.css'
import { getUsers } from '../service/app' 

function DisplayContent() {
  const [configuration, setUser] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    let response = await getUsers();
    setUser(response.data)
    console.log(response.data);
  }

  return (
    <div className="display">
      <div className='form__display'>
        <table className='table tab1'>
          <thead>
            <tr>
              <th>Site ID</th>
              <th>Esim</th>
              <th>Customer Name</th>
              <th>Device id</th>
            </tr>
          </thead>

          <tbody>
            {
              configuration.map((user) => {
                return <tr>
                  <td>{user.siteid}</td>
                  <td>{user.esim}</td>
                  <td>{user.cname}</td>
                  <td>{user.device}</td>

                </tr>
              })
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default DisplayContent
