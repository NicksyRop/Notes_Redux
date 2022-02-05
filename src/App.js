import React from "react";
import { createStore } from "redux";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

const Counter = (props) => {
  return (
    <div>
      <Button
        text="Increment"
        handleClick={(e) => props.store.dispatch({ type: "INCREMENT" })}
      />
      <Button
        text="Decrement"
        handleClick={(e) => props.store.dispatch({ type: "DECREMENT" })}
      />
      <Button
        text="Zero"
        handleClick={(e) => props.store.dispatch({ type: "ZERO" })}
      />
    </div>
  );
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  const newStore = store.getState();
  console.log(newStore);
});

const App = () => {
  return (
    <div>
      {store.getState()}
      <Counter store={store} />
    </div>
  );
};

export default App;
