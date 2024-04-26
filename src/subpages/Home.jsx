import React from 'react'
import Blogs from '../data/Blogs'

function Home() {
  return (
    <div className="grid-cols-1 grid gap-2 bg-slate-900 pt-5">
    {Blogs.map((post) => (
        <div key={post.id} className="border-slate-300 border bg-slate-200 p-5 ml-20 mr-20 mt-1  rounded-lg  hover:bg-white" >
            <h2 className="font-bold p-1 justify-center">{post.title}</h2>
            <p className="font-normal p-1">{post.excerpt}</p>
            


    
         </div>
    ))}
    
    </div>
    
  )
}

export default Home
