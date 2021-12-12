import { SET_TODO_INPUT,ADD_TODO } from "./constant";
const initState = {
  todo: [],
  todoInput: "",
};
const reducer = (state, actions) => {
  console.log("actionsnnnn", actions);
  switch (actions.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: actions.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo , actions.payload],
        todoInput: '',
      };
    default:
      throw Error("Invalid action");
  }
};
export { initState };
export default reducer;
