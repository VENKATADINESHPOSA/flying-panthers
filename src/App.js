import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      panthers: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ panthers: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { panthers, searchField } = this.state;
    const filteredPanthers = panthers.filter((panther) =>
      panther.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Flying Panthers</h1>
        <SearchBox
          placeholder="search panthers"
          handleChange={this.handleChange}
        />
        <CardList panthers={filteredPanthers} />
      </div>
    );
  }
}

export default App;
