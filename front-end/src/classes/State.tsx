import User from "./User";

type State = {
    user: User | null;
  }

type Action =
| { type: "login"; payload: User }
| { type: "logout" }

export type {State, Action}