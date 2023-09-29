import React from 'react'
import './AdminPanel.css'

function AdminPanel() {
  return (
    <div className="display">
      <div className='form-configuration'>
        <h2 className='header-title'>Admin Panel </h2>

        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Client Name" />
            <label htmlFor="floatingInputGroup1">Client Name</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Serial Number" />
            <label htmlFor="floatingInputGroup1">Serial Number</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Manufacture Details" />
            <label htmlFor="floatingInputGroup1">Manufacture Details</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="E SIM" />
            <label htmlFor="floatingInputGroup1">E SIM </label>
          </div>
        </div>

        <div className=''>
          <div className="dropdown btn-drop">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Input Controls
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Read</a></li>
              <li><a className="dropdown-item" href="/">Remove </a></li>
              <li><a className="dropdown-item" href="/">Add </a></li>
            </ul>
          </div>

          <button type="button" className="btn btn-outline-primary btn-save">Save</button>
          <button type="button" className="btn btn-outline-danger">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
