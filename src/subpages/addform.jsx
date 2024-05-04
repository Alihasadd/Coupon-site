import React from 'react'
import About from '../data/Addform'
import Qrcode from './Qrcode'

function Addform() {
  return (
    
       <div className="  bg-indigo-800 pt-4 p-2 text-indigo-900  @container  ">
        
      <form className="border-slate-300 border bg-slate-200 p-5 ml-20 mr-20 mt-2 space-y-1 rounded-lg font-sans max-w-64 justify-center ">
        <h1 className="font-sans font-extrabold px-2">Add offer details</h1>
       
       
        <div className="justify-around px-2">Offer details <br></br>
          <input className="Offer rounded-md font-sans px-2 max-w-40" type="text" placeholder="ex. Free taco, 20% off" />
        </div>
        
        <div className="px-2 py-2">Where to redeem <br></br>
          <input className="Company/Brand rounded-md px-2 max-w-40" type="text" placeholder="Company/Brand" />
        </div>
        
        <div className="px-2 py-2">Expiration date <br></br>
          <input className="Expiration Date rounded-md max-w-40" type="date" /> <br></br>
          <input className="No Expiration Date" type="checkbox" />
          <label>No expiration</label>
        </div>
        
        <div className="px-2 py-2">Offer value <br></br>
          <input className="Value rounded-md px-2 max-w-40" type="number" placeholder="Value" data-type="currency" />
        </div>
        
        <div className="px-2 py-2">Redeption conditions <br></br>
          <input className="Redeption conditions rounded-md px-2 max-w-40" type="text" placeholder="Terms and Conditions" />
        </div>

        <div className="px-2 py-2">Offer type <br></br>
          <input className="Digital rounded-md px-2" type="radio" value="type" id="type1" name="offer"/>
          <label for="type1">Digital</label>
          <br></br>
          <input className="Physical card rounded-md px-2" type="radio" id="type2" name="offer" />
          <label for="type2">Physical</label>
        </div>

        <div className="px-2 py-2"><br></br>
        <Qrcode />
  

        </div>
        
        <button className="border-4 border-indigo-500/50 hover:border-indigo-700 hover:bg-indigo-700 hover:text-white hover:font-extrabold rounded-md px-2 min-w-48 justify-center">+</button>

      </form>
    </div>

  )
}
  

export default Addform


//Enter coupon details
//Enable location <- remind you to use coupon
//Scan coupons to digital wallet
//Expiration - notify a month before X
//API Target - .3km  sends a message 
//Shared coupon/offer based on 

//code barre : https://www.npmjs.com/package/react-barcode
//- https://codesandbox.io/p/sandbox/33rfn2-ggxl7j 
//https://www.npmjs.com/package/@react-google-maps/api