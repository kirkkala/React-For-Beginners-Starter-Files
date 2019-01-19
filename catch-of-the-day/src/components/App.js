import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    // 1. Make a copy of existing state
    // OBJECT SPREAD = "..."
    const fishes = {...this.state.fishes};
    // 2. Add new fishes to fishes variable
    // fishes[`fish${Date.now()}`];
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({
      fishes // equals to "fishes: fishes" because same name
    });
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };

  addToOrder = (key) => {
    // 1. Copy to state
    const order = { ...this.state.order };

    // 2. Either add to or update the order
    order[key] = order[key] + 1 || 1;

    // 3. Call setState to update our state.
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
