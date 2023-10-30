import st from "./Input.module.css";
import { InputProps } from "../../types/props";
import { useState } from "react";
import { useAppSelector } from "../../redux/hook";

function Input({ label, name, type, placeholder, onChange }: InputProps) {
  const [typeInput, setTypeInput] = useState(type);
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const switchType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (typeInput === "password") setTypeInput("text");
    else setTypeInput("password");
  };

  return (
    <div className={`${st[mode]} ${st.input}`}>
      <label>{label}</label>
      <input
        type={typeInput}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        onFocus={(e) => onChange(e)}
        autoComplete="false"
        autoFocus
        required
      />
      {type === "password" && (
        <>
          <button className={st.input__show} onClick={(e) => switchType(e)}>
            {typeInput === "password" ? "SHOW" : "HIDE"}
          </button>
          <a>Forgot your password?</a>
        </>
      )}
    </div>
  );
}
export default Input;
