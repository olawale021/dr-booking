import logo from './logo.svg';
import { BrowserRouter as Router} from "react-router-dom"
import Header from "./components/header/Header"

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
      </Router>

    </div>
  );
}

export default App;
