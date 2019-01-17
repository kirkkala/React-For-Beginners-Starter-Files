import React from "react";
import { render } from "react-dom";
import './css/style.css';

// Import my custom components.
import StorePicker from "./components/StorePicker";
import App from "./components/App";

// render(<p>Hohoo!</p>, document.querySelector('#main'));
render(<App />, document.querySelector('#main'));