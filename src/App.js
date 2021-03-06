import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './features/home/home';
import Blog from './features/blog/blog';
import Contact from './features/contact/contact';

const App = () => {
  return (
    <>
      <Header></Header>
      <main className="min-h-screen bg-white pb-20 dark:bg-gray-600 text-black dark:text-white">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
