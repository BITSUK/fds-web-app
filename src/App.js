import './App.css';
import Header from './Components/Header/Header.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import CentralPane from './Components/CentralPane/CentralPane.js';
import RightPane from './Components/RightPane/RightPane.js';
import Footer from './Components/Footer/Footer.js';
import Login from './Components/LoginRegistration/Login.js';
import Registration from './Components/LoginRegistration/Registration.js';
import Blank from './Components/RightPane/Blank.js';
import ResetPassword from './Components/LoginRegistration/ResetPassword.js';
import Ds from './Components/DS/Ds.js';
import OrderFoodNow from './Components/DS/OderNow.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from './Components/Contexts/UserContext';
import { MessageContext } from './Components/Contexts/MessageContext';
import { useState} from "react";
import OrderNow from './Components/DS/OderNow.js';
import Offers from './Components/DS/Offers.js';
import OrderDetails from './Components/DS/OrderDetails.js';
import TrackOrder from './Components/DS/TrackOrder.js';

function App() {  

  // This user object can be centrally stored and imported where needed
  const defaultUser1 = {
    uid: "Guest",
    name: "Guest",
    isLoggedIn: false
  }  
  const [user, setUser] = useState(defaultUser1);
  
  // This user object can be centrally stored and imported where needed
  const defaultMessage1 = {
    alertMessage: "",
    alertType: "alert-light",
  }
  const [message, setMessage] = useState(defaultMessage1);

  return ( 
    <UserContext.Provider value={[user, setUser]}> 
    <MessageContext.Provider value={[message, setMessage]}> 
    <Router>
        <div className="container"> 
          <div className="row">
            <Header />
          </div>
          
          <div className="row">
            <SideMenu />
            
            <div className="column central-pane" id="BMM">              
              <Routes>
                  <Route exact path="/" element={<CentralPane />}/>                  
                  <Route exact path="/login" element={<Login />}/>
                  <Route exact path="/register" element={<Registration />}/>
                  <Route exact path="/forgot-password" element={<ResetPassword />}/>                 
                  <Route exact path="/ds" element={<Ds />}/>    
                  <Route exact path="/OrderFoodNow/:rest_id/" element={<OrderNow />}/>   
                  <Route exact path="/offers" element={<Offers />}/>  
                  <Route exact path="/OrderDetails" element={<OrderDetails/>}/>
                  <Route exact path='/TrackOrder' element={<TrackOrder/>}/>           
              </Routes>
            </div>

            <div className="column right-pane" id="BMR">
              <Routes>
                  <Route exact path="/" element={<RightPane />}/>
                  <Route exact path="/order-food" element={<RightPane />}/>
                  <Route exact path="/login" element={<Blank message="Enter username and password to login. Password min 8 chars."/>}/>
                  <Route exact path="/register" element={<Blank message="Enter user details to register. Restuarant registration will involve approval."/>}/>
                  <Route exact path="/forgot-password" element={<Blank message="Reset password using OTP authentication. Password should be atleast 8 character."/>}/>
              </Routes>
            </div>
            
          </div>
          
          
          <div className="row">
            <Footer />
          </div>  
        </div>
    </Router>
    </MessageContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
