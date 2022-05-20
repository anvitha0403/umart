import { useSelector, useDispatch } from "react-redux";
import { reset } from "./userSlice";

export const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.user;
  });
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          -
        </button>
      </div>
    </section>
  );
};
