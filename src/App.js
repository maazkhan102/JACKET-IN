import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact  from './Pages/Contact';
import About from './Pages/About';
import Footer from './Components/Footer';


function App() {
  return (  
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/about" component={About}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
