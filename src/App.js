import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Auth from './container/Auth/Auth';
import Home from './container/home/Home';
import Department from './container/Department/Department';
import Doctor from './container/Doctor/Doctor';
import Form from './container/Form/Form';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Footer from './component/footer/Footer';
import Medicine from './container/Medicine/Medicine';
import BookAppointment from './container/Appoinment/BookAppointment';
import { Route, Switch } from 'react-router-dom';
import ListAppointment from './container/Appoinment/ListAppointment';
import PublicRoute from './Route/PublicRoute';
import PrivateRoute from './Route/PrivateRoute';
import ToggleThemeContext from './context/ThemeContext';
import ToggleProvider from './context/ThemeContext';
import { Provider } from "react-redux";
import { store } from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ToggleProvider>
        <Header />
        <Switch>
          <PublicRoute path={"/"} exact component={Home}></PublicRoute>
          <PublicRoute path={"/Auth"} restricted={true} exact component={Auth}></PublicRoute>
          <PublicRoute path={"/Department"} exact component={Department}></PublicRoute>
          <PublicRoute path={"/Doctor"} exact component={Doctor}></PublicRoute>
          <PublicRoute path={"/About"} exact component={About}></PublicRoute>
          <PublicRoute path={"/Contact"} exact component={Contact}></PublicRoute>
          <PublicRoute path={"/Medicine"} exact component={Medicine}></PublicRoute>
          <PrivateRoute path={"/book_apt"} exact component={BookAppointment}></PrivateRoute>
          <PrivateRoute path={"/list_apt"} exact component={ListAppointment}></PrivateRoute>
          <Route path={"/Form"} exact component={Form}></Route>
        </Switch>
        <Footer />
      </ToggleProvider>
      </Provider>
    </div>
  );
}

export default App;
