import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProblemOne from './ProblemOne';
import ProblemTwo from './ProblemTwo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={{margin:`10px 0px`}}>
        <Link to='/problemOne' style={{margin:`10px`}}>ProblemOne</Link>
        <Link to='/problemTwo'>ProblemTwo</Link>
        </div>
        <Routes>
          <Route path='/problemOne' element={<ProblemOne />} />
          <Route path='/problemTwo' element={<ProblemTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
