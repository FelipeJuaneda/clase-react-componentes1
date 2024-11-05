import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const saludo = "Hola soy ItemListContainer pasado por prop desde App";

  const numeros = 12412412;

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  

  return (
    <>
      <ItemListContainer 
          saludo={saludo} 
          numeros={numeros} 
          array={array} 
    />
    
   
    </>
  );
}

export default App;
