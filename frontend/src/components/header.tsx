import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-md bg-white/10 text-white backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold">
          API Testing
        </h1>

        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/users" className="hover:text-blue-500">
              Users
            </Link>
          </li>

          <li>
            <Link to="/profile" className="hover:text-blue-500">
              Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100/10">
            SignIn
          </button>

          <button className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Header;