"use client";
const { createContext, useContext, useReducer } = require("react");

const StoreContext = createContext();

const initailState = [];

function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      return [...state, action.payload];

    case "deleteItem":
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload);

    case "clearCart":
      return initailState;

    default:
      break;
  }
}

export function StoreContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initailState);
  
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

function useStoreContext() {
  const context = useContext(StoreContext);

  if (context === undefined)
    throw new Error("You have used StoreContext outside the provider");
  return context;
}

export default useStoreContext;
