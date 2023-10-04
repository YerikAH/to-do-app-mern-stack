import { useState } from "react";
import st from "./Register.module.css";
import google from "../../assets/google.png";
import { useAppSelector } from "../../redux/hook";

function Register() {
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
        <h3>Create an account</h3>
        <div className={st.input}>
          <label>Enter your username: </label>
          <input type="text" placeholder="HarveyYerik" required />
        </div>
        <div className={st.input}>
          <label>Enter your email: </label>
          <input type="email" placeholder="example@example.com" required />
        </div>
        <div className={st.input}>
          <label>Enter your password: </label>
          <input type={type} placeholder="&_cgtWx01q>hMb?M" required />
          <button className={st.input__show} onClick={(e) => switchType(e)}>
            {type === "password" ? "SHOW" : "HIDE"}
          </button>
        </div>
        <button type="submit" className={`${st.submit} ${st.btn}`}>
          Register
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
export default Register;
