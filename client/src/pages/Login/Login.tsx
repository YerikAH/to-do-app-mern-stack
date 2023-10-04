import { useState } from "react";
import st from "./Login.module.css";
import google from "../../assets/google.png";
import { useAppSelector } from "../../redux/hook";

function Login() {
  const [type, setType] = useState("password");
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const switchType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (type === "password") setType("text");
    else setType("password");
  };
  return (
    <div className={`${st.modal} ${st[mode]}`}>
      <form className={st.form}>
        <h2>TODO</h2>
        <h3>Log in into your account</h3>
        <div className={st.input}>
          <label>Enter your email: </label>
          <input type="email" placeholder="example@example.com" />
        </div>
        <div className={st.input}>
          <label>Enter your password: </label>
          <input type={type} placeholder="&_cgtWx01q>hMb?M" />
          <button className={st.input__show} onClick={(e) => switchType(e)}>
            {type === "password" ? "SHOW" : "HIDE"}
          </button>
          <a>Forgot your password?</a>
        </div>
        <button type="submit" className={`${st.submit} ${st.btn}`}>
          Log in
        </button>
        <div className={st.separator}>
          <div></div>
          <p>o</p>
          <div></div>
        </div>
        <button type="submit" className={`${st.google} ${st.btn}`}>
          <img src={google} alt="google" />
          Continue with Google
        </button>
      </form>
    </div>
  );
}
export default Login;
