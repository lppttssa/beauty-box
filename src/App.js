import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.css';
import BeautyBox from './views/BeautyBox'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<BeautyBox/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
