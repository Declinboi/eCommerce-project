import React, { useState } from "react";
import "./index.css";
import { Provider } from "react-redux"
import "./App.css";
import Navbar from "./component/Navbar";
import Page from "./component/Page";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  );
}

export default App;
