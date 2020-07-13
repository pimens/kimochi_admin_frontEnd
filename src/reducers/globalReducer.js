import { RESET, ubahId, SETMKN, SETPROMO,SETCBNG } from "../actions/types";

const initialState = {
  counter: 0, id: 10,
  // server: "http://localhost/nomAdmin/WebApi/",
  server: "http://localhost/blog/public/api/makanan/",
  server1: "http://localhost/blog/public/uploads/data/thumb/",
  mkn: {},
  prm: {},
  cbng: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET:
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
