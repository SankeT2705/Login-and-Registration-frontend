import React from 'react';
import { useState } from 'react';
import Login from './login';
import Register from './register';
import Custom from './custom';
import TaskBar from './taskbar';
import Home from './home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
const App = () => {
  const [user, setuser] = useState({})
  return (
    <div className="container">
      <Router>
        <TaskBar />
        <Routes>
          <Route exact path="/" element={
            user && user._id ?
              <Home setuser={setuser} userdata={user} /> : <Login setuser={setuser} />} />
          <Route path="/login" element={<Login setuser={setuser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/custom" element={<Custom userdata={user} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
