import React from "react";
import { render } from "react-dom";

// Import my custom components.
import Router from "./components/Router";

import './css/style.css';

// render(<p>Hohoo!</p>, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));