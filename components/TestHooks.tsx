import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../common/ThemeContext";


const TestHooks = (props: any) => {

  // const contextTheme = useContext(ThemeContext);

  const reducer = (state: number, action: string) => {
    switch (action) {
      case "TANG":
        return state + 1;
      case "GIAM":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };

  const initState = {
    loading: false,
    data: [],
  };

  const userReducer = (state: any, action: any) => {
    switch (action.type) {
      case  "GET_USER_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case  "GET_USER_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case  "GET_USER_ERROR":
        return {
          ...state,
          loading: false,
          data: [],
          error: action.data,
        };
      default:
        return {
          ...state,
        };
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);
  const getUser = () => {
    
    userDispatch({type: 'GET_USER_REQUEST'});

    setTimeout(() => {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => {
        console.log('resssssssssss', res);
        userDispatch({type: 'GET_USER_SUCCESS',data: res});
      })
      .catch(err => {
        console.log('errrrrr', err);
        userDispatch({type: 'GET_USER_ERROR',data: err});
    })
    }, 2000)
  }

  return (
    <div>
      <div>Childrent</div>
      <div>{props.children}</div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch("TANG");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch("GIAM");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>
      <div>
        <button onClick={getUser}>Get user</button>
      </div>
      {
        user.loading ? <p>Loading...</p> : <p>{ JSON.stringify(user)}</p>
      }
      {/* context hooks */}
      {/* <div className={contextTheme.theme}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div> */}
      {/* <div><button onClick={()=>{contextTheme.toggle()}}>Change Color</button></div> */}
      </div>
  );
};

export default TestHooks;
