import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
    <div className="bg-white App" >
      <BrowserRouter>
				<ScrollToTop />
      	<Header />
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
