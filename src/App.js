import './App.css';
import Login from './components/login-component/Login';
import StoreProvider from '../src/components/context/Provider';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Login/>
      </StoreProvider>
    </div>
  );
}

export default App;
