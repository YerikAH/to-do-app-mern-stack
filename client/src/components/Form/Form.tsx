import { useState } from "react";
import st from "./Form.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { createTask } from "../../redux/features/tasksSlice";
import { TaskProps } from "../../types/props";

function Form() {
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const [status, setStatus] = useState("");
  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const task: TaskProps = {
      id: Date.now().toString(),
      task: input,
      completed: false,
    }
    dispatch(createTask(task))
    setInput("")
  }
  return (
    <form className={`${st.form} ${st[mode]}`} onSubmit={(e) => handleSubmit(e)}>
      <button type="submit"></button>
      <p className="font-normal">{status}</p>
      <input
        name="task"
        type="text"
        value={input}
        className="font-normal"
        placeholder="Create a new todo..."
        onBlur={() => setStatus("")}
        onFocus={() => setStatus("Currently typing")}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
export default Form;
