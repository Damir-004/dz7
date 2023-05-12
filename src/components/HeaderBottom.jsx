import React, { useContext } from "react";
import { Context } from "../Context";
import Ingredients from "./Ingredients";
const HeaderBottom = () => {
  const { state, dispatch} =
  useContext(Context);
  return (
    <div className="app-bottom">
      <div className="app-bottom_left">
        <ul>
          <li>
            <img src={state[0].pizza.mainPicture} alt="Тесто" />
          </li>
          {state[0].pizza.ingredients.map((obj, i) => {
            if (obj.total > 0) {
              return (
                <li key={i}>
                  <img src={obj.picture} alt={obj.picture} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="app-bottom_right">
        <div className="title">
          <h2>Your pizza</h2>
          <span className="pizza-price">{state[0].pizza.price}$</span>
          <button className="btn-res" onClick={() => dispatch({ type: "reset" })}>
            Reset pizza
          </button>
        </div>
        <Ingredients />
        <div className="total">
          <h3>Total</h3>
          <span className="total-span">{state[0].pizza.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;