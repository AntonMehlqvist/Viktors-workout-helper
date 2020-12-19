import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout';

function App() {
	return (
    <div className="App bg-gray-50">
      <BrowserRouter>
      	<Header />
        <Layout />
        <Link to="/hej">hej</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
