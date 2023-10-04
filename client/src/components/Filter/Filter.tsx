import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  clearCompleted,
  filterByActive,
  filterByCompleted,
  getTask,
} from "../../redux/features/tasksSlice";
import { options } from "../../types/props";
import st from "./Filter.module.css";
import Button from "./Button/Button";

function Filter() {
  const [option, setOption] = useState<options | string>(options[0]);
  const { modeReducer, tasksReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(clearCompleted());
  };
  useEffect(() => {
    if (option === options[0]) {
      dispatch(getTask());
    } else if (option === options[1]) {
      dispatch(filterByActive());
    } else if (option === options[2]) {
      dispatch(filterByCompleted());
    }
  }, [option]);

  useEffect(() => {
    setOption(options[0]);
  }, [tasksReducer.saveTask]);

  return (
    <div className={`${st.filter} ${st[modeReducer.mode]}`}>
      <p className={`${st.filter__text}`}>
        {tasksReducer.tasks.length} items left
      </p>
      <div className={st.filter__options}>
        {Object.values(options)
          .filter((item) => typeof item === "string")
          .map((item, idx) => (
            <Button
              key={idx}
              option={option}
              setOption={setOption}
              selfOption={item as options}
            />
          ))}
      </div>
      <button
        className={`${st.filter__text} ${st.hover}`}
        onClick={handleClick}
      >
        Clear Completed
      </button>
    </div>
  );
}
export default Filter;
