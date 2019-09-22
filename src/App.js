import React from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import DataManager from "./components/DataManager";

class App extends React.Component {
  dataManager = new DataManager();

  render() {
    return (
      <div className="App">
        <AddForm dataManager={this.dataManager} />
      </div>
    );
  }
}

export default App;
