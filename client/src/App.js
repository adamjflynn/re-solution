import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 
import
import
import


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={} />
      <Route path="/edit/:id" component={} />
      <Route path="/create" component={} />
      <Route path="/user" component={} />
    </Router>
  );
}

      

export default App;
