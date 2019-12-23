import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <div className="Service">
        <header>
          <img src={this.props.icon}></img>
          <h1>{this.props.title}</h1>
        </header>
        <main>
          <p>{this.props.description}</p>
        </main>
      </div>
    );
  }
}
