import logo from "./logo.svg";
import "./App.css";

const estilo = (bg = "#333") => ({
  backgroundColor: bg,
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",
});
const Li = ({ children }) => {
  return (
    <li style={estilo()} className="clase-li">
      {children}
    </li>
  );
};

function App() {
  const valor = "triste";
  return (
    <ul style={estilo()} className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
}

export default App;
