import './App.css';
import Header from './Components/Header/Header.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import CentralPane from './Components/CentralPane/CentralPane.js';
import RightPane from './Components/RightPane/RightPane.js';
import Footer from './Components/Footer/Footer.js';
import NoPage from './Components/NoPage/NoPage.js';
import Login from './Components/Login/Login.js';
import Registration from './Components/Login/Registration.js';
import Blank from './Components/RightPane/Blank.js';
import ResetPassword from './Components/Login/ResetPassword.js';
import OrderFood from './Components/OrderFood/OrderFood.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from './Components/Contexts/UserContext';
import { AlertContext } from './Components/Contexts/AlertContext';
import { useState} from "react";

function App() {  

  // This user object can be centrally stored and imported where needed
  const defaultUser1 = {
    uid: "Guest",
    name: "Guest",
    isLoggedIn: false
  }  
  const [user, setUser] = useState(defaultUser1);
  
  //set default message
  const defaultMessage1 = {
    alertMessage: "",
    alertType: "default"
  }
  const [alert, setAlert] = useState(defaultMessage1);

  return ( 
    <UserContext.Provider value={[user, setUser]}> 
    <AlertContext.Provider value={[alert, setAlert]}> 
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
                  <Route exact path="/index" element={<CentralPane />}/>                  
                  <Route exact path="/login" element={<Login test="test"/>}/>
                  <Route exact path="/register" element={<Registration />}/>
                  <Route exact path="/forgot-password" element={<ResetPassword />}/>
                  <Route exact path="/order-food" element={<OrderFood />}/>
                  <Route exact path="*" element={<NoPage />}/>
              </Routes>
            </div>

            <div className="column right-pane" id="BMR">
              <Routes>
                  <Route exact path="/" element={<RightPane />}/>
                  <Route exact path="/order-food" element={<RightPane />}/>
                  <Route exact path="/login" element={<Blank message="Enter user id and password to login. 
                                                                      Password min 8 chars and UIDxxx (where xxx = 001, 002, 003 or 004)."/>}/>
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
    </AlertContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
