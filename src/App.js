import './App.css';
import Header from './Components/Header.js';
import SideMenu from './Components/SideMenu.js';
import CentralPane from './Components/CentralPane.js';
import RightPane from './Components/RightPane.js';
import Footer from './Components/Footer.js';


function App() {
  return ( 
    <div className="container"> 
      <div className="row">
        <Header />
      </div>
      
      <div className="row">
        <SideMenu />
        <div className="column central-pane" id="BML">
          <CentralPane />
        </div>
        <div className="column right-pane" id="BML">
          <RightPane />
        </div>
      </div>
      
      
      <div className="row">
        <Footer />
      </div>  
    </div>
  );
}

export default App;
