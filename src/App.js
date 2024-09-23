
import Home from './components/Home';
import UsarContexto from './context/UsarContexto';

function App() {
  return (
    <UsarContexto>
      <Home></Home>
    </UsarContexto>
  );
}

export default App;
