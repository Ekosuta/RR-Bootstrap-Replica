import './App.css';
import Stores from './components/Stores';
import Background from './components/Background';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Background />
      <Stores />
    </div>
  );
}

export default App;
