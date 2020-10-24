import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
//import VowelTest from './components/VowelTest/VowelTest.js';
//import Exercises from './components/Exercises/Exercises.js';
import VowelCheck from './components/VowelTest/VowelCheck.js';
import Resources from './components/Resources/Resources.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Courses from './components/Courses/Courses.js';
import VowelContrastsContextProvider from './contexts/VowelContrastsContext.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';


function App() {
  return (<>
    <Router>
      <Header></Header>
      <main className="App">
            <VowelContrastsContextProvider>
              <Switch>

              <Route exact path='/' component={Home} />
              <Route path='/resources' component={Resources} />
              <Route path='/about' component={About} />
              <Route path='/classes' component={Courses} />
              <Route path='/vowelcheck' component={VowelCheck} />
              <Route component={NotFoundPage} />

              </Switch>

            </VowelContrastsContextProvider>

        <Footer></Footer>
      </main>
    </Router>
  </>
  );
}

export default App; 
