import './App.css'
import Login from "./components/login"
import Profile from './components/profile';
import ContextProvider from './context/ContextProvider';

function App() {

 
  return (
    <ContextProvider>
      <h1>React context api is important</h1>
      <Login />
      <Profile/>
    </ContextProvider>
  )
}

export default App
