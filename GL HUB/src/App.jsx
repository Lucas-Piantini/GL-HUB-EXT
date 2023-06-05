import "./App.css";
import { CategoryGrid } from "./components/CategoryGrid";
import { links } from "./pages";

fetch('https://raw.githubusercontent.com/Lucas-Piantini/GL-Hub/main/pages.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos del JSON obtenidos en la respuesta
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  });


const App = () => {
  return (
    <div className="App">
      {links.map((list) => {
        return <CategoryGrid key={list.category} category={list.category} data={list.pages} />
      })}
    </div>
  );
}

export default App;