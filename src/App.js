import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Banner from "./components/Banner";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={{ mode: "main" }}>
          <div>
            <Banner bannerTitle="Testing" bannerContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus fermentum sem, a molestie lacus pharetra quis. Nunc suscipit sem vitae odio cursus, ut dictum nisi faucibus." />
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <Card></Card>
                </div>
                <div className="col-sm-6">
                  <Card></Card>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
