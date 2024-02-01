import { useEffect } from "react";
import { app } from "../Firebase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const auth = getAuth(app);
export default function SignOut() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
  

        setUser(user);
       
   
      } else {

        setUser(null);
        
        toast.success("Please Login",{
          position: "bottom-right"
        })

      }
    });
  }, []);
  const notify=
  ()=>{
    toast.success("Please Login",{
      position: "bottom-right"
    })

  }

  if (user === null) {
    return (
      <>
      
        <Link
          to="/Signin" onClick={notify}
          className="relative rounded-full p-1 text-gray-400  focus:outline-none "
        >
          <FontAwesomeIcon
            icon={faUser}
            className="text-black text-xl hover:text-yellow-600"
          />
        </Link>

        <ToastContainer/>

  
      </>
    );
  }
  return (
    <div className="flex  ">
      
<p className=" pr-1 h-5  text-red-600">{user.displayName}</p>

      <FontAwesomeIcon
        className="h-5"
        icon={faSignOut}
        onClick={() => signOut(auth)}
      />
        <ToastContainer/>
    </div>
  
  );
}
