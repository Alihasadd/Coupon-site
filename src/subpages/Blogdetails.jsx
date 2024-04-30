import React from 'react'
import { useParams } from 'react-router-dom';
import blogs from '../data/Blogs';

function Blogdetails() {

    const { id } = useParams();

      const blogPost = blogs.find(blogData => blogData.id === id)

  return (  
      <div>
        <h1>
            Hola
        </h1>

        <p>
            Look at this
        </p>

      </div>
    
  )
}

export default Blogdetails
