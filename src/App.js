import { Component } from "react";

class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("ejecutando render");
    return <button>Enviar</button>;
  }
}

class App extends Component {
  state = { valor: 3 };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundo</p>
        <Button chanchito="feliz" />
        <button
          className={`{this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;
