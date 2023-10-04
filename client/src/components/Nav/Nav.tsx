import st from "./Nav.module.css";
import { Link } from "react-router-dom";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { switchMode } from "../../redux/features/modeSlice";
import { useEffect } from "react";

function Nav() {
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(switchMode())
  }
  useEffect(() => {
    const html = document.querySelector("html")!;
    mode === "dark" ? html.classList.add("dark") : html.classList.remove("dark");
  },[mode])
  return (
    <nav className={st.nav}>
      <Link to="/">TODO</Link>
      <button onClick={handleClick}>
        <img src={mode === "dark" ? moon : sun} alt="mode" />
      </button>
    </nav>
  );
}
export default Nav;
