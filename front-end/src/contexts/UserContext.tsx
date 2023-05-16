import { createContext, useReducer } from 'react';
import { Action, State } from '../classes/State';

const initialState: State = {
  user: null
};


export const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "login":
        return {user : action.payload}
    case "logout":
      return { user: null};
    default:
      return state;
  }
}

export default function UserContextProvider(props:{children:JSX.Element}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};