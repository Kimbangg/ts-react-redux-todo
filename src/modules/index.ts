import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// 리덕스를 기반으로 한 프로젝트는 루트 리듀서가 있는 것 같다.
// 그래서 이전 리액트 프로젝트에서 index.js + router를 통해 다른 컴포넌트를
// 관리 했던 것과 같은 역할을 수행 하는게 아닐까? 생각해본다.
