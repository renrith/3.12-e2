import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './Menu';

const ENDPOINT = 'https://three-random-reasons-mdqknjcwpl.now.sh/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: []
    };

    this.fetchMenu = this.fetchMenu.bind(this);
  }

  componentDidMount() {
    this.fetchMenu();
  }

  componentDidUpdate() {
    console.log('updated!');
  }

  fetchMenu() {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        this.setState({
          menu: data
        });
      })
  }

  render() {
    const { menu } = this.state;

    return (
      <Fragment>
        <div className="App">
          <Menu menu={menu} />
        </div>

        <button onClick={this.fetchMenu}></button>
      </Fragment>
    );
  }
}

export default App;
