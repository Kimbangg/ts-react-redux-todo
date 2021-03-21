// 액션 타입 선언 ( 여기서 언급하는 타입은 리덕스 액션 안에 들어가게 될 타입이다.)
// as const를 하지 않는다면, 반환 값이 무조건 string으로 오기에 리듀서에서 올바른 처리가 어려워진다.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "couner/INCREASE_BY" as const;

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.

type CounterState = {
  count: number;
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

const initialState: CounterState = {
  count: 0,
};

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

export default counter;
