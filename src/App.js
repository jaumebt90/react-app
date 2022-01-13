import Button from "./Button";

const App = () => {
  const miVariable = true;
  if (miVariable) {
    return <p>Mi variable dio true</p>;
  }
  return (
    <div>
      <h1 onClick={(e) => console.log("click", e)}>Hola mundo</h1>
      <Button onClick={() => console.log("Clickeado")}>Enviar</Button>
    </div>
  );
};

export default App;
