import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);  // State to toggle dropdown visibility

  useEffect(() => {
    // Get current user information
    axios.get("https://learnmate-backend-8fei.onrender.com/auth/google",{ withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogin = () => {
  window.location.href = "https://learnmate-backend-8fei.onrender.com/auth/google";
};

const handleLogout = () => {
  window.location.href = "https://learnmate-backend-8fei.onrender.com/auth/google";
};

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="text-white bg-black p-4 flex justify-between items-center">
      <h1 className="text-2xl">Online</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/courses" className="hover:text-gray-400">Courses</Link>
        <Link to="/create-course" className="hover:text-gray-400">Create Course</Link>

        {user ? (
          <div className="relative">
            <img
              src={user.photo}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown} // Toggle dropdown on click
            />
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 bg-black text-white p-4 rounded shadow-lg w-48">
                <p className="font-bold">{user.name}</p>
                {/* <p>{user.email}</p> */}
                <button onClick={handleLogout} className="mt-2 text-sm hover:text-gray-400">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={handleLogin} className="ml-4 text-sm">Sign In with Google</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
