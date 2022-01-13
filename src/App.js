import logo from "./logo.svg";
import "./App.css";

const estilo = {
  backgroundColor: "#456",
};
const Li = ({ children }) => {
  return (
    <li style={estilo} className="clase-li">
      {children}
    </li>
  );
};

function App() {
  const valor = "triste";
  return (
    <ul className="clase-css">
      <Li estado="feliz">valor de li {valor}</Li>
    </ul>
  );
}

export default App;
