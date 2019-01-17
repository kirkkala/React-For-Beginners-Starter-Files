import React from "react";
import { render } from "react-dom";
import './css/style.css';

// Import my custom components.
import StorePicker from "./components/StorePicker";

// render(<p>Hohoo!</p>, document.querySelector('#main'));
render(<StorePicker />, document.querySelector('#main'));