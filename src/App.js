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
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", prevProps, prevState);
  }

  componentWillUnmount() {}

  render() {
    console.log("ejecutando render");
    return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
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
