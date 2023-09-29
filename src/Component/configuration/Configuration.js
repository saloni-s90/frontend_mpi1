import React,{useState} from 'react'
import { addUsers } from '../service/app'
import { PiIdentificationBadgeFill } from "react-icons/pi"
import { BiSolidUserCircle } from "react-icons/bi"
import { TbDeviceComputerCamera } from "react-icons/tb"
import { useNavigate } from 'react-router-dom'
import './Configuration.css'


const defaultValue = { 
  siteid : "",
  esim : "",
  cname : "",
  device : ""
}


function Configuration() {

  const [user,setUser] = useState(defaultValue);
  const navigate = useNavigate()

const onValueChange = (e) => {
  setUser({ ...user,[e.target.name]: e.target.value })

}


const AddUser = async () => {
  await addUsers(user)
  navigate('/display')
}


  return (
    <div className='display'>
      <form className='form-configuration'>
        <h1 className='header-title'>Configuration</h1>

        <div className="input-group mb-3">
          <span className="input-group-text"><PiIdentificationBadgeFill /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Site ID"
              onChange={(e) => onValueChange(e)} name='siteid'
            />
            <label htmlFor="floatingInputGroup1">Site ID</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><PiIdentificationBadgeFill /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="E Sim"
              onChange={(e) => onValueChange(e)} name='esim'
            />
            <label htmlFor="floatingInputGroup1">E Sim</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><BiSolidUserCircle /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Customer Name"
              onChange={(e) => onValueChange(e)} name='cname'
            />
            <label htmlFor="floatingInputGroup1">Customer Name</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><TbDeviceComputerCamera /></span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Device ID"
              onChange={(e) => onValueChange(e)} name='device'
            />
            <label htmlFor="floatingInputGroup1">Device ID</label>
          </div>
        </div>

        <button type="button" className="btn btn-outline-primary" onClick={AddUser}>Save</button>

      </form>
    </div>
  )
}

export default Configuration
