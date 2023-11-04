import st from "./Input.module.css";
import { InputProps } from "../../types/props";
import { useState } from "react";
import { useAppSelector } from "../../redux/hook";
import useValidatinoInput from "../../hooks/useValidationInput";

function Input({ label, name, type, placeholder, onChange }: InputProps) {
  const [typeInput, setTypeInput] = useState(type);
  const [input, setInput] = useState("");
  const { error, message, validateGeneral } = useValidatinoInput({
    type: type,
  });
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const switchType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (typeInput === "password") setTypeInput("text");
    else setTypeInput("password");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInput(text);
    onChange(e);
    validateGeneral(text);
  };
  return (
    <div className={`${st[mode]} ${st.input}`}>
      <label>{label}</label>
      <input
        type={typeInput}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
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
      {error && <p>{message}</p>}
    </div>
  );
}
export default Input;
