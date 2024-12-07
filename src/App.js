import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import Register from './Component/Pages/Register';
import Show from './Component/Pages/Show';
import Error from './Component/Pages/Error';
import Update from './Component/Pages/Update';
import Delete from './Component/Pages/Delete';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<Error />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/show' element={<Show />}></Route>
          <Route path='/update/:client' element={<Update />}></Route>
          <Route path='/delete/:client' element={<Delete />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
