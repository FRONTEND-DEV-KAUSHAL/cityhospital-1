import logo from './logo.svg';
import './App.css';
import Home from './Container/home/Home';
import Footer from './Component/footer/Footer';
import Header from './Component/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
