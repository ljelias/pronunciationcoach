import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import VowelTest from './components/VowelTest/VowelTest.js';
import Exercises from './components/Exercises/Exercises.js';
import Resources from './components/Resources/Resources.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import VowelContrastsContextProvider from './contexts/VowelContrastsContext.js';


function App() {
  return (<>
    <Router>
      <Header></Header>
      <main className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/about' component={About} />

            <VowelContrastsContextProvider>
              <Route path='/voweltest' component={VowelTest} />
              <Route path='/exercises' component={Exercises} />
            </VowelContrastsContextProvider>
          </Switch>
        <Footer></Footer>
      </main>
    </Router>
  </>
  );
}

export default App; 
