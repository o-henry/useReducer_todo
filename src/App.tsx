import React, { useReducer } from "react";
import { nanoid } from "nanoid";

function reducer(state: any, action: { type: any }) {
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
    default: {
      return state;
    }
  }
}

function TodoItem({ id, completed }: any) {
  return (
    <>
      <input type="checkbox" checked={completed} />
      <input type="text" />
      <button>Delete</button>
    </>
  );
}

function TodoList({ items }: any) {
  return items.map((item: { id: string; completed: boolean }) => (
    <TodoItem key={item.id} {...item} />
  ));
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <TodoList items={state} />
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

export default App;
