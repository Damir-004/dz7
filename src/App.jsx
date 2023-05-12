import React, { useReducer, useState } from "react";
import Product from "./Product";
import reducer from "./reducer";
import { Context } from "./Context";
import HeaderBottom from "./components/HeaderBottom";

function App() {
  const [state, dispatch] = useReducer(reducer, Product);
  const add = (obj) => {
    dispatch({ type: "add", payload: obj });
  };
  const del = (obj) => {
    dispatch({ type: "del", payload: obj });
  };

  const value = {
    state,
    dispatch,
    del,
    add,
  };

  return (
    <Context.Provider value={value}>
      <div className="app">
        <div className="app-top">
          <span>Build your pizza</span>
          <span>Ingredients</span>
        </div>
        <HeaderBottom />
      </div>
    </Context.Provider>
  );
}

export default App;