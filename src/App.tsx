import React, { Component } from 'react';

type AppState = {
  pressedKey: string | null;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      pressedKey: null,
    };
  }

  // Add the event listener on component mount
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // Remove the event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // Update state when a key is pressed
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App__message">
        {pressedKey
          ? `The last pressed key is ${pressedKey}`
          : 'Nothing was pressed yet'}
      </div>
    );
  }
}

export default App;
