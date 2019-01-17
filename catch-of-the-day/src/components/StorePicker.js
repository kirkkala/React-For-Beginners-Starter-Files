// Always import react to the components!
import React from "react";
import { getFunName} from "../helpers";

// Stir the sauce.
class StorePicker extends React.Component {

  // constructor() {
  //   super()
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  // Notice uncommented syntax to not need the constructor above
  // BLAH: goToStore(event) { ...
  goToStore = event => {
    // 1. Stop form from submitting
    event.preventDefault();
    // 2. Get text from input
    console.log(this);

    // 3. Change the page to /store/input
  }

  render() {
    return (
      <React.Fragment>
        {/* For comments, use block comments within curly brackets */}
        {/* <React.Fragment> should also work as empty tag (<>) */}
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit store &rarr;</button>
        </form>
      </React.Fragment>
    );
  }
}

// Always export to be available.
export default StorePicker;
