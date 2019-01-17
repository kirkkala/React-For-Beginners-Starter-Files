// Always import react to the components!
import React from "react";

// Stir the sauce.
class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        { /* For comments, use block comments within curly brackets */ }
        { /* <React.Fragment> should also work as empty tag (<>) */ }
        <form action="" className="store-selector">
          <h2>Enter a store</h2>
          <input type="text" required placeholder="Store name"/>
          <button type="submit">Visit store &rarr;</button>
        </form>
      </React.Fragment>
    )
  }
}

// Always export to be available.
export default StorePicker;
