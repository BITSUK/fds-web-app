import './App.css';
import Header from './Components/Header.js';
import './Components/css/Header.css';
import SideMenu from './Components/SideMenu.js';
import './Components/css/SideMenu.css';
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

        <div class="column middle-body" id="BML">
          middle body
        </div>
        <div class="column right-pane" id="BML">
          right pane
        </div>
      </div>
      
      
      <div class="row">
        <Footer />
      </div>  
    </div>
  );
}

export default App;
