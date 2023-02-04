import './App.css';
import Header from './Components/Header/Header.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import CentralPane from './Components/CentralPane/CentralPane.js';
import RightPane from './Components/RightPane/RightPane.js';
import Footer from './Components/Footer/Footer.js';
import NoPage from './Components/NoPage/NoPage.js';
import UnderConstruction from './Components/NoPage/UnderConstruction.js';
import Login from './Components/Login/Login.js';
import Registration from './Components/Login/Registration.js';
import Blank from './Components/RightPane/Blank.js';
import ResetPassword from './Components/Login/ResetPassword.js';
import Home from './Components/Home/Home.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import PreviousOrders from './Components/Dashboard/PreviousOrders.js';
import FAQ from './Components/FAQ/FAQ.js';
import CustJourneyHelp from './Components/CentralPane/CustJourneyHelp.js';
import OrderFood from './Components/OrderFood/OrderFood.js';
import OrderFoodTrain from './Components/OrderFood/OrderFoodTrain.js';
import OrderFoodRest from './Components/OrderFood/OrderFoodRest.js';
import OrderFoodMenu from './Components/OrderFood/OrderFoodMenu.js';
import DisplayCart from './Components/Cart/DisplayCart.js';
import OrderConfirmation from './Components/OrderFood/OrderConfirmation.js';
import Payment from './Components/Payment/Payment';
import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from './Components/Contexts/UserContext';
import { AlertContext } from './Components/Contexts/AlertContext';
import { CartContext, emptyCart } from './Components/Contexts/CartContext';
import { OrderContext, sampleOrder } from './Components/Contexts/OrderContext';
import { useState} from "react";

function App() {  

  // This user object can be centrally stored and imported where needed
  const defaultUser1 = {
    uid: "Guest",
    name: "Guest",
    role: "default",
    isLoggedIn: false
  }  
  const [user, setUser] = useState(defaultUser1);
  const [cart, setCart] = useState(emptyCart);
  const [order, setOrder] = useState(sampleOrder);

  //set default message
  const defaultMessage1 = {
    alertMessage: "",
    alertType: "default"
  }
  const [alert, setAlert] = useState(defaultMessage1);

  return ( 
    <UserContext.Provider value={[user, setUser]}> 
    <AlertContext.Provider value={[alert, setAlert]}> 
    <CartContext.Provider value={[cart, setCart]}> 
    <OrderContext.Provider value={[order, setOrder]}> 
    <Router>
        <div className="container"> 
          <div className="row">
            <Header />
          </div>
          
          <div className="row">
            <SideMenu />
            
            <div className="column central-pane" id="BMM">              
              <Routes>
                  <Route exact path="/" element={<OrderFood />}/>                  
                  <Route exact path="/index" element={<OrderFood />}/>                  
                  <Route exact path="/login" element={<Login test="test"/>}/>
                  <Route exact path="/register" element={<Registration />}/>
                  <Route exact path="/forgot-password" element={<ResetPassword />}/>
                  <Route exact path="/home" element={<OrderFood />}/>
                  <Route exact path="/dashboard" element={<Dashboard />}/>
                  <Route exact path="/order-food" element={<OrderFood />}/>
                  <Route exact path="/order-food/train/:train_id" element={<OrderFoodTrain/>}/>
                  <Route exact path="/order-food/station/:station_id" element={<OrderFoodRest/>}/>
                  <Route exact path="/order-food/rest/:rest_id" element={<OrderFoodMenu/>}/>
                  <Route exact path="/order-conf-page" element={<OrderConfirmation />} />
                  <Route exact path="/previous-orders" element={<PreviousOrders />}/>
                  <Route exact path="/profile" element={<UnderConstruction />}/>
                  <Route exact path="/rest-menu" element={<UnderConstruction />}/>
                  <Route exact path="/rest-orders" element={<UnderConstruction />}/>
                  <Route exact path="/rest-settings" element={<UnderConstruction />}/>
                  <Route exact path="/payment" element={<Payment />}/>    
                  <Route exact path="/faq" element={<FAQ />}/>     
                  <Route exact path="/journey" element={<CustJourneyHelp />}/>  
                  <Route exact path="*" element={<NoPage />}/>
              </Routes>
            </div>

            <div className="column right-pane" id="BMR">
              <Routes>
                  <Route exact path="/" element={<RightPane />}/>
                  <Route exact path="/home" element={<RightPane />}/>
                  <Route exact path="/login" element={<Blank message="Enter user id and password to login. Password min 8 chars and UIDxxx (where xxx = 001, 002, 003 or 004)."/>}/>
                  <Route exact path="/register" element={<Blank message="Enter user details to register. Restuarant registration will involve approval."/>}/>
                  <Route exact path="/forgot-password" element={<Blank message="Reset password using OTP authentication. Password should be atleast 8 character."/>}/>
                  <Route exact path="/faq" element={<Blank message="This page is placeholder."/>}/>  
                  <Route exact path="/journey" element={<Blank message="This page is placeholder."/>}/> 
                  <Route exact path="/dashboard" element={<Blank message=""/>}/>
                  <Route exact path="/order-food" element={<Blank message=""/>}/>
                  <Route exact path="/order-food/rest/:rest_id" element={<DisplayCart />}/>
                  <Route exact path="/order-conf-page" element={<Blank message="Check details and make payment."/>} />
                  <Route exact path="/payment" element={<Blank message="Choose payment option and provide payment details."/>} />
                  <Route exact path="*" element={<Blank message=""/>}/>
              </Routes>
            </div>
            
          </div>     
          
          <div className="row">
            <Footer />
          </div>  
        </div>
    </Router>
    </OrderContext.Provider>
    </CartContext.Provider>
    </AlertContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
