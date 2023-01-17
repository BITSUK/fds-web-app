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
    <div class="container"> 
      <div class="row">
        <Header />
      </div>
      
      <div class="row">
        <SideMenu />

        <div class="column central-pane" id="BML">
          <CentralPane />
        </div>
        <div class="column right-pane" id="BML">
          <RightPane />
        </div>
      </div>
      
      
      <div class="row">
        <Footer />
      </div>  
    </div>
  );
}

export default App;
