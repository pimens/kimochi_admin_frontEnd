import { RESET, ubahId, SETMKN, SETPROMO,SETCBNG } from "../actions/types";

const initialState = {
  counter: 0, id: 10,
  server: "http://localhost/nomAdmin/",
  mkn: {},
  prm: {},
  cbng: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET:
      // console.log(state);      
      // state.counter = state.counter+100;
      return Object.assign({}, state, {
        counter: 0,
        id: 0
      })
    case SETMKN:
      return Object.assign({}, state, {
        mkn: action.data
      })
    case SETCBNG:
      return Object.assign({}, state, {
        cbng: action.data
      })
    case SETPROMO:
      return Object.assign({}, state, {
        prm: action.data
      })
    case ubahId:
      console.log(action.type);
      return Object.assign({}, state, {
        id: action.data
      })
    default:
      return state;
  }
}
