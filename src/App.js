import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './board/BoardList';
import BoardPost from './board/BoardPost';
import BoardDetail from './board/BoardDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<BoardList/>} exact />
          <Route path='/BoardPost' element={<BoardPost/>} exact />
          <Route path='/BoardDetail' element={<BoardDetail/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
