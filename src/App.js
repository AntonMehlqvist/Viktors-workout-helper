import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout';

function App() {
	return (
    <div className="bg-white App" >
      <BrowserRouter>
      	<Header />
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
