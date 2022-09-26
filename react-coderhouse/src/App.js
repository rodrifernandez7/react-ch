import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return(
  <>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a RFM KICKS!"/>
  </>
  )
}

export default App;
