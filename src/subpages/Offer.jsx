import React from 'react'
import Offer from '../data/Offer'



function Offers() {
  return (
    <div>
      <div className="grid-cols-1 grid gap-2 bg-slate-900 pt-5">
    {Offer.map((post) => (
        <div key={post.id} className=" bg-slate-200 p-5 ml-20 mr-20 mt-1  rounded-lg  hover:bg-white relative" >
            <div className="">{post.logo}</div>
            <h2 className="font-bold p-1 justify-center">{post.card}</h2>
            <p className="font-normal p-1"></p>
            <p className="font-normal p-1 absolute bottom-0 right-4 p-1">{post.conditions}</p>
            <p className="text-bold text-white bg-indigo-500 absolute top-0 right-4 p-1 rounded-b-lg px-2 py-2">{post.value}</p>
            <span className="bg-indigo-400 justify-center absolute bottom-0 left-4 p-1 rounded-t-lg">{post.expiration}</span>
            
         </div>
    ))}
    </div>
    </div>

  )}

export default Offers


  