import React from "react";

{/**
 Stateless functional component
  ...is creating it as "const" instead of
 class Header extends React.Component {
  render() {
    return (
*/}
const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>
      day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
