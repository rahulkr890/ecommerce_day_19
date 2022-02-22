import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    console.log("Inside constructor method call");
    this.state = {
      count: 0
    };

  }
  componentDidMount() {
    console.log("inside componentDidMount method call");
  }
  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps method call");
    return null;
  }
  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate method call");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("Inside getSnapshotBeforeUpdate method call");
    return null;
  }
  componentDidUpdate() {
    console.log("Inside componentDidUpdate method call");
  }
  componentWillUnmount() {
    console.log("Inside componentWillUnmount method call");
  }
  render() {
    console.log("Inside render method call");
    return (
      <div style={{textAlign:"center"}}>
        <h1>React lifecycle example</h1>
        <button
          onClick={() => {
            this.shouldComponentUpdate();
            this.setState({count:this.state.count+1})
          }}
        >
          Call componentWillUnmount() method
        </button>
      </div>
    );
  }
}