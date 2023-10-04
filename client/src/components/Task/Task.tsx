import st from "./Task.module.css";
import cross from "../../assets/icon-cross.svg";
import check from "../../assets/icon-check.svg";
import { TaskProps } from "../../types/props";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { deleteTask, updateTask } from "../../redux/features/tasksSlice";

function Task({ id, task, completed }: TaskProps) {
  const [color, setColor] = useState("");
  const dispath = useAppDispatch();
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const changeBackground = () =>
    mode === "dark" ? setColor("dark-btn") : setColor("light-btn");
  const handleUpdate = (id: string) => dispath(updateTask(id));
  const handleDelete = (id: string) => dispath(deleteTask(id));
  const handleHover = () => setColor("hover-btn");
  const handleLeave = () => changeBackground();

  useEffect(() => {
    if (completed) setColor("transparent-btn");
  }, [completed]);

  useEffect(() => {
    changeBackground();
  }, [mode]);

  return (
    <div className={`${st.task} ${st[mode]}`}>
      <div className={`center ${st.task__completed} ${st[color]}`}>
        <button
          className={`center ${st.task__completed__btn} ${
            completed && `${st["completed-btn"]}`
          }`}
          onMouseOver={!completed ? handleHover : () => {}}
          onMouseOut={!completed ? handleLeave : () => {}}
          onClick={() => handleUpdate(id)}
        >
          {completed && <img src={check} alt="check" />}
        </button>
      </div>
      <p id={completed ? `${st.completed}` : ""}>{task}</p>
      <button
        onClick={() => handleDelete(id)}
        className={`center ${st.task__delete}`}
      >
        <img src={cross} alt="croos" />
      </button>
    </div>
  );
}
export default Task;
