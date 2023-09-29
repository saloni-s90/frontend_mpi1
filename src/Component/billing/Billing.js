import React from 'react'
import './billing.css'

function Billing() {
  return (
    <div className="display">
    <div className='form-configuration'>
      <h2 className='header-title'> Billing Cycle </h2>

      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInputGroup1" placeholder="E Sim" />
          <label for="floatingInputGroup1">E Sim</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Cloud Billing" />
          <label for="floatingInputGroup1">Cloud Billing</label>
        </div>
      </div>

      <button type="button" className="btn btn-outline-primary btn-save">Save</button>
      <button type="button" className="btn btn-outline-danger">Cancel</button>
      </div>
    </div>
  )
}

export default Billing

