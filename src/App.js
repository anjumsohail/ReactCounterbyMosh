import React, { Component } from "react";
import Counters from "./components/Counters";

import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncreament = (counter) => {
    const Counters = [...this.state.Counters];
    const index = Counters.indexOf(counter);
    Counters[index] = { ...counter };
    Counters[index].value++;

    this.setState({ Counters });
  };

  handleDecrease = (counter) => {
    const Counters = [...this.state.Counters];
    const index = Counters.indexOf(counter);
    Counters[index] = { ...counter };
    Counters[index].value--;

    this.setState({ Counters });
  };

  handlReset = () => {
    const Counters = this.state.Counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ Counters });
  };

  handleDelete = (counterId) => {
    const Counters = this.state.Counters.filter((c) => c.id !== counterId);
    this.setState({ Counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.Counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Counters
            Counters={this.state.Counters}
            onReset={this.handlReset}
            onIncrement={this.handleIncreament}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
