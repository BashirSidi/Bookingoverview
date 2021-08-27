import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import "./App.css";
import useStore from "./state";

const App = () => {
  const mode = useStore((state) => state.mode);

  console.log(mode);

  return (
    <div className={mode ? "app-dark" : "app-light"}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
