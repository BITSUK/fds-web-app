import './App.css';
import Header from './Components/Header.js';
import SideMenu from './Components/SideMenu.js';
import CentralPane from './Components/CentralPane.js';
import RightPane from './Components/RightPane.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login.js';
import Registration from './Components/Registration.js';
import Blank from './Components/Blank.js';
import ResetPassword from './Components/ResetPassword.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from './Components/Contexts/UserContext';
import { MessageContext } from './Components/Contexts/MessageContext';
import { useState} from "react";

function App() {  

  const defaultUser1 = {
    uid: "Guest1",
    name: "User-Guest1",
  }
  
  const [user, setUser] = useState(defaultUser1);

  return ( 
    <UserContext.Provider value={[user, setUser]}> 
    <Router>
        <div className="container"> 
          <div className="row">
            <Header />
          </div>
          
          <div className="row">
            <SideMenu />
            
            <div className="column central-pane" id="BML">
              {/* Routing logic for the central pane */}
              <Routes>
                  <Route exact path="/" element={<CentralPane />}/>
                  <Route exact path="/login" element={<Login />}/>
                  <Route exact path="/signup" element={<Registration />}/>
                  <Route exact path="/forgot-password" element={<ResetPassword />}/>
              </Routes>
            </div>

            
            <div className="column right-pane" id="BML">
              
              {/* Routing logic for the central pane */}
              <Routes>
                  <Route exact path="/" element={<RightPane />}/>
                  <Route exact path="/login" element={<Blank message="Enter userid and password to login." />}/>
                  <Route exact path="/signup" element={<Blank message="Enter user details for sign-up. You can register as a customer or as a restaurant. Registration as a restaurant will be validated and approved upon submission."/>}/>
                  <Route exact path="/forgot-password" element={<Blank message="Enter OTP sent on mobile to allow resetting of password." alertType="alert-info"/>}/>
              </Routes>
            </div>
            
          </div>
          
          
          <div className="row">
            <Footer />
          </div>  
        </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
