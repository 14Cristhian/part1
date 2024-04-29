import "./App.css";
import Mensaje from "./mensajes";

const Descripcion = () => {
  return <p>Esta es una app </p>;
};
function App() {
  const dia = new Date();
  return (
    <div className="App">
      {dia + "Evaluacion en Jsx"}
      <Descripcion></Descripcion>
      <Mensaje color="red" message="Este Es un Curso de Reac"></Mensaje>
      <dialog open>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </div>
  );
}

export default App;
