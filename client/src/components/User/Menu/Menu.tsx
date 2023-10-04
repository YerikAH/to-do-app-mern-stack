import { useAppSelector } from "../../../redux/hook";
import st from "./Menu.module.css";

function Menu() {
  const mode = useAppSelector((state) => state.modeReducer.mode);
  return (
    <div className={`${st[mode]} ${st.menu}`}>
      <button>Update username</button>
      <button>Logout</button>
    </div>
  );
}
export default Menu;
