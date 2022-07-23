
import './App.css';
import Restaurantcards from './Components/Restaurantcards';
import Slider from './Components/Slider';
// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import Join from './Pages/Join';
// import Login from './Pages/Login';
// import Logout from './Pages/Logout';

import Allroutes from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
      {/* <Join/> */}
      <Allroutes/>
      {/* <Restaurantcards/> */}
    </div>
  );
}

export default App;
