import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App scroll-smooth">
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
