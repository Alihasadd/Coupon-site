import React from 'react'
import Offers from '../data/Offer'
import offers from '../data/Blogs'
import here from '../data/Offer'

function Coupon() {
    return (
      <div>
        <div className="grid-cols-1 grid gap-2 bg-slate-900 pt-5">
      {here.map((post) => (
          <div key={post.id} className=" bg-slate-200 p-5 ml-20 mr-20 mt-1  rounded-lg  hover:bg-white relative" >
              <h2 className="font-bold p-1 justify-center">{post.card}</h2>
              <p className="font-normal p-1">{post.value}</p>
              <span className="bg-orange-500 absolute top-0 right-4 p-1 rounded-b-lg">Expiration</span>
             
      
           </div>
      ))}
      
      </div>
      </div>
  
      
    )
  }
  
  export default Coupon
