import React from 'react'
import About from '../data/Addform'

function Addform() {
  return (
    
       <div>
      <form>
        <input className="Offer" type="text" placeholder="Offer" />
        <input className="Company/Brand" type="text" placeholder="Company/Brand" />
        <input className="Expiration Date" type="date" />
        <input className="Value" type="number" placeholder="Value" />
        <input className="Terms and conditions" type="text" placeholder="Terms and Conditions" />


      </form>
    </div>

  )
}
  

export default Addform
