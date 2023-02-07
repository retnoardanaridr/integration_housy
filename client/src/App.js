import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./contexts/userContext";
import { API, setAuthToken } from "./config/api"

//component
import LandingPage from "./pages/home";
import Navbar from "./component/navbar";
import PageDetail from "./pages/detail";
import MyProfile from "./pages/myProfile";
import BookingPage from "./pages/myBooking";
import History from "./pages/history";
import AddProperty from "./pages/addProperty";
import IncomeTransaction from "./pages/transaction";
import Example from "./pages/radio";
import AddCity from "./pages/addcity";


function App() {
  const navigate= useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.listas === 'owner') {
        navigate('/income-transaction');
        console.log(state.user.listas)
      } else if (state.user.listas === 'tenant') {
        navigate('/')
        console.log(state.user.listas)
      }
    }
  }, [state]);

  const checkUserAuth = async () => {
    try {
      if (localStorage.token) { 
        setAuthToken(localStorage.token); 
        const response = await API.get("/check-auth"); 

        let payload = response.data.data; 
        payload.token = localStorage.token;
        console.log(localStorage.token);
   
        dispatch({ 
           type: "USER_SUCCESS", 
           payload, 
        }); 
     } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, [])

  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/detail/:id" element={<PageDetail />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
          <Route exact path="/my-booking" element={<BookingPage />} />
          <Route exact path="/history" element={<History />} />
          {/* admin */}
          <Route exact path="/add-property" element={<AddProperty />} />
          <Route exact path="/add-city" element={<AddCity/>} />
          <Route exact path="/income-transaction" element={<IncomeTransaction/>} />
          <Route exact path="/example" element={<Example/>} />
        </Routes>
    </>
  );
}

export default App;
