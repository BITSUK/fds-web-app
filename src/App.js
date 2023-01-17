import './App.css';
import Header from './Components/Header.js';
import './Components/css/Header.css';
import SideMenu from './Components/SideMenu.js';
import './Components/css/SideMenu.css';
import CentralPane from './Components/CentralPane.js';
import './Components/css/CentralPane.css';
import RightPane from './Components/RightPane.js';
import './Components/css/RightPane.css';
import Footer from './Components/Footer.js';
import './Components/css/Footer.css';

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
