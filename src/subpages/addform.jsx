import React from 'react'
import About from '../data/Addform'

function Addform() {
  return (
    
       <div className="grid-cols-1  bg-indigo-900 pt-4 p-20 ">
        
      <form className="border-slate-300 border bg-slate-200 p-5 ml-20 mr-20 mt-1  rounded-lg inline-block align-middle flex flex-col space-y-1 font-sans">
        <h1 className="font-sans font-extrabold">Enter your offer details</h1>
        <div className="px-2 py-2">Offer details <br></br>
          <input className="Offer rounded-md font-sans px-4" type="text" placeholder="ex. Free taco, 20% off" />
        </div>
        
        <div className="px-2">Where to redeem <br></br>
          <input className="Company/Brand rounded-md px-2" type="text" placeholder="Company/Brand" />
        </div>
        
        <div className="px-2 py-3">Expiration date <br></br>
          <input className="Expiration Date rounded-md px-4" type="date" />
        </div>
        
        <div className="px-2 py-2">Offer value <br></br>
          <input className="Value rounded-md px-2" type="number" placeholder="Value" data-type="currency" />
        </div>
        
        <div className="px-2 py-2">Anything to keep inmind for redeeming? <br></br>
          <input className="Terms and conditions rounded-md px-2" type="text" placeholder="Terms and Conditions" />
        </div>
        
        <button className="border-4 border-indigo-500/50 hover:border-indigo-700 hover:bg-indigo-700 hover:text-white hover:font-extrabold rounded-md px-2">+</button>

      </form>
    </div>

  )
}
  

export default Addform
