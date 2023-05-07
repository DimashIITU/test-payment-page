import './App.css';
import Router from './routes/router';
import { BrowserRouter } from 'react-router-dom';

import { Context } from './Context';

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Router />
      </Context>
    </BrowserRouter>
  );
}

export default App;
