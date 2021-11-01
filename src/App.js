import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Oops from './Components/Oops/Oops';
import Services from './Components/Services/Services';

function App() {
  return (
    <>

      {/* Routing  */}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home> </Route>
          <Route exact path="/home"> <Home></Home> </Route>
          <Route exact path="/service"> <Services></Services> </Route>
          <Route exact path="/about"> <About></About> </Route>
          <Route exact path="/contact"> <Contact></Contact> </Route>

          <Route path="*"> <Oops></Oops> </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
