import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar" >
        <div className="link flex gap-y-4 gap-x-4 bg-sky-800 text-white p-5">
            <Link to="/" className="bg-sky-700 p-2 hover:bg-sky-600 rounded-lg">Home</Link>
            <Link to="/About" className="bg-sky-700 p-2 hover:bg-sky-600 rounded-lg">About</Link>
            <Link to="/Blog" className="bg-sky-700 p-2 hover:bg-sky-600 rounded-lg">Blog</Link>
             
        </div>
      </nav>
    </div>
  )
}


export default Navbar


//className="text-xl relative flex h-16 justify-between absolute inset-y-0 left-0 flex"