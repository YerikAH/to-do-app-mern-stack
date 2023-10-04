import st from "./Button.module.css";
import { ButtonProps } from "../../../types/props";
import { useAppSelector } from "../../../redux/hook";

function Button({ option, setOption, selfOption }: ButtonProps) {
  const optionToString = JSON.stringify(selfOption);
  const upperToCapitalize = optionToString.toLowerCase();
  const mode = useAppSelector((state) => state.modeReducer.mode);
  return (
    <button
      className={`${option === selfOption ? st.active : st.text} ${st[mode]}`}
      onClick={() => setOption(selfOption)}
    >
      {upperToCapitalize[1].toUpperCase() + upperToCapitalize.slice(2, -1)}
    </button>
  );
}
export default Button;
