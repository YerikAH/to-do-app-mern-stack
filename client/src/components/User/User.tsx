import { IconUser } from "@tabler/icons-react";
import st from "./User.module.css";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";
import Menu from "./Menu/Menu";

function User() {
  const [open, setOpen] = useState(false);
  const mode = useAppSelector((state) => state.modeReducer.mode);

  const switchMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={st.position}>
      <button className={`${st.user} ${st[mode]}`} onClick={switchMenu}>
        <IconUser size={20} />
        <p>Harvey Yerik</p>
      </button>
      {open && <Menu />}
    </div>
  );
}
export default User;
