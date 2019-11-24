import React, { Component } from "react";

export let Navigation = (props) => {
  let styles = { signedOut: { display: "flex", justifyContent: "flex-end" } };

  if (props.signedIn) {
    return (
      <nav style={styles.signedOut}>
        <p
          onClick={() => props.onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    )}
  else {
    return (
      <nav style={styles.signedOut}>
        <p
          onClick={() => props.onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => props.onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    )
  }
};
