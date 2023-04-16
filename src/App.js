
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Home/>
        <About/>
        <Menu/>
      </div>
    </>
  );
}

export default App;
