import logo from './logo.svg';
import './App.css';
import Home from './Container/home/Home';
import Footer from './Component/footer/Footer';
import Header from './Component/header/Header';
import Department from './Container/departments/Departments';
import Doctors from './Container/doctors/Doctors';
import About from './Container/about/About';
import Contact from './Container/contact/Contact';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
            <Route path={'/'} exact component={Home}></Route>
            <Route path={'/Departments'} exact component={Department}></Route>
            <Route path={'/Doctors'} exact component={Doctors}></Route>
            <Route path={'/About'} exact component={About}></Route>
            <Route path={'/Contact'} exact component={Contact}></Route>



        </Switch>
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}

export default App;
