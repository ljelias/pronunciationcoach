import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import VowelCheck from './components/VowelTest/VowelCheck.js';
import Resources from './components/Resources/Resources.js';
import Home from './components/Home/Home.js';
import Courses from './components/Courses/Courses.js';
import VowelContrastsContextProvider from './contexts/VowelContrastsContext.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';


function App() {
  return (<>
    <HashRouter>
      <Header></Header>
      <main className="App">
            <VowelContrastsContextProvider>
              <Switch>

              <Route exact path='/' component={Home} />
              <Route path='/resources' component={Resources} />
              <Route path='/classes' component={Courses} />
              <Route path='/vowelcheck' component={VowelCheck} />
              <Route component={NotFoundPage} />

              </Switch>

            </VowelContrastsContextProvider>

      </main>
      <Footer></Footer>

    </HashRouter>
  </>
  );
}

export default App; 
