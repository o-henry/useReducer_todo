import React, { useReducer, useContext, createContext } from "react";
import { nanoid } from "nanoid";

function reducer(state: any, action: { type: any; payload?: any }) {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: nanoid(),
          complted: false,
        },
      ];
    }
    case "DELETE": {
      return state.filter((item: any) => item.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}

function TodoItem({ id, completed }: any) {
  // const dispatch = useContext(Context);

  return (
    <>
      <input type="checkbox" checked={completed} />
      <input type="text" />
      {/* <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        Delete
      </button> */}
    </>
  );
}

function TodoList({ items }: any) {
  return items.map((item: { id: string; completed: boolean }) => (
    <TodoItem key={item.id} {...item} />
  ));
}

function TodoApp() {
  const Context: any = createContext(null);

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Context.Provider value={dispatch}>
      <div>
        <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
        <TodoList items={state} />
      </div>
    </Context.Provider>
  );
}

function Prac() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

export default Prac;
