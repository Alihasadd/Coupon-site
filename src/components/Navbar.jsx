import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar" >
        <div className="link flex gap-y-4 gap-x-4 bg-white text-white p-5">
            <Link to="/" className="bg-indigo-700 p-2 hover:bg-indigo-600 rounded-lg min-w-24 text-center">Home</Link>
            <Link to="/About" className="bg-indigo-700 p-2 hover:bg-indigo-600 rounded-lg min-w-24 text-center">About</Link>
            <Link to="/Blog" className="bg-indigo-700 p-2 hover:bg-indigo-600 rounded-lg min-w-24 text-center">Blog</Link>
            <Link to="/addform" className="bg-indigo-700 p-2 hover:bg-indigo-600 rounded-lg min-w-24 text-center">+</Link>
        </div>
      </nav>
    </div>
  )
}


export default Navbar


//className="text-xl relative flex h-16 justify-between absolute inset-y-0 left-0 flex"