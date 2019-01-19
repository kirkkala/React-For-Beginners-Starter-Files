import React from "react";
import firebase from  "firebase";
import AddFishForm from "./AddFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {

  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    // Keep user logged in.
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    // 1. Look up teh current store in teh firebase DB
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);

    // 2. Claim it if there is no owner
    if (!store.owner) {
      // Save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3. Set state of inventory component to reflect current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
                       // dynamic for auth.FaceookAuthProvider
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });

  };

  render() {

    const logout = <button onClick={this.logout}>Log out</button>;

    // 1. Check if not logged in, display login button(s)
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    console.log(this.state);

    // 2. check if is not owner
    if (this.state.uid !== this.state.owner) {
      return <div>
        <p>Sorry you are not the owner</p>
        { logout }
      </div>
    }

    // 3. They must be the owner, render inventory.
    return (
      <div className="inventory">
        { logout }
        <h2>Inventory!</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>
      </div>
    )
  }
}

export default Inventory;
