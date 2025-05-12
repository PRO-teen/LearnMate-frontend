import { useEffect, useState } from "react";
import axios from "axios";

function SignInPage() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {

    axios.get("https://learnmate-backend-8fei.onrender.com/api/current_user", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="text-white bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Sign In</h1>
      {user ? (
        <div className="text-center mt-6">
          <img src={user.photo} alt="profile" className="w-24 h-24 rounded-full mx-auto" />
          <p className="text-xl mt-4">{user.name}</p>
          <p className="text-lg mt-2">{user.email}</p>
        </div>
      ) : (
        <p className="mt-4">Please sign in with Google to view your profile.</p>
      )}
    </div>
  );
}

export default SignInPage;
