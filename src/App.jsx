import Navbar from "./component/Routes/Navbar";
import "./App.css";
import Home from "./component/Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeatureAuthor from "./component/Routes/FeatureAuthor";
import Genres from "./component/Routes/Genres";
import { useState } from "react";
import Loader from "./component/Routes/Loader";
import Featured from "./component/Routes/Featured";
import Signin from "./component/Sign/Signin";
import Signup from "./component/Sign/Signup";
import axios from "axios";
import CartList from "./component/Routes/CartList";
import { app } from "./component/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ForgotPassword from "./component/Sign/ForgotPassword";
import Success from "./component/Routes/Success";
import Cancel from "./component/Routes/Cancel";
function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const [isLoading, setIsLoading] = useState(true);
  const [CART, setCART] = useState([]);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  //darkmode
  //auth
 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
         axios
    .get("http://127.0.0.1:9000/get/"+user.email)
    .then(({ data }) => {
      setCART(data);
    
    })
    .catch((err) => console.log(err));
  

      } else {

        setUser(null);
    
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps

 


  //addtocart
  const addItem = (data, name, url, Genres, price) => {
   
  const existingItem = CART.find((item) => item.itemName === name);
    var count = 1;

    if (existingItem) {
      existingItem.count++;
    } else {
      axios
        .post("http://localhost:9000/add", {
          
          itemName: name,
          itemUrl: url,
          itemGenres: Genres,
          itemPrice: price,
          itemQuantity: count,
          userId:user.email

        })
        .then( () =>toast.success("Successfull Added",{
          position: "bottom-right"
        }))
        
        .catch();}
      
  };

 

//remove
  const remove = (id) => {
    axios
      .delete("http://127.0.0.1:9000/deleteItem/" + id)
      .then(() =>toast.success("successfully deleted",{
        position: "bottom-right"
      }))
      .catch((err) => console.log(err));
     
  };

 
  return (
    <>
      <div className="" style={{ backgroundColor:"#fdf2f8" }} id="app">
        {isLoading ? (
          <div className="w-full bg-white flex mt-72 justify-center ">
            <Loader />
          </div>
        ) : (
          <div>
            <BrowserRouter>
              <Navbar  count={CART.length}  />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Featureauthor" element={<FeatureAuthor />} />
                <Route path="/Genres" element={<Genres />} />
                <Route
                  path="/Featured"
                  element={user?<Featured addItem={addItem} />:<Signin/>}
                />
                <Route path="/Shopnow" element={user?<Featured />:<Signin/>} />
                <Route path="/Signup" element={<Signup app={app} />} />
                <Route path="/Signin" element={<Signin app={app} />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />

                <Route
                  path="/CartList"
                  element={user?<CartList user={user.email} CART={CART} remove={remove}/>:<Signin/> }
                />
                    <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />


              </Routes>
          
              <ToastContainer />
            </BrowserRouter>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
