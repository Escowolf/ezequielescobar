import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

//consertar renderização da home e do footer

export default App;
