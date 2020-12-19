import './App.css';
import Button from './components/Elements/Button';
import Header from './components/Header/Header';
import Hero from './components/Header/Hero/Hero';

function App() {
	return (
    <div className="App bg-gray-50">
      <Header />

      <Hero
        img={'https://miro.medium.com/max/14144/1*toyr_4D7HNbvnynMj5XjXw.jpeg'}>
        <h1 className="mb-16 text-6xl font-bold leading-tight capitalize sm:text-7xl lg:text-8xl">
          Välkommen Lil' Vic
        </h1>
        <h3 className="text-3xl font-semibold mb-7">
          Klicka på knappen och svettas lite skitunge!
        </h3>

        <Button passedHref="/">Klicka då!</Button>
      </Hero>
    </div>
  );
}

export default App;
