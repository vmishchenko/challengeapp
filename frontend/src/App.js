import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      {/* TODO add main header*/}

      <Routes />

      {/* TODO add main footer*/}
    </Router>
  );
}

export default App;
