import { useEffect, useState } from "react";
import st from "./Login.module.css";
import google from "../../assets/google.png";
import { useAppSelector } from "../../redux/hook";
import useForm from "../../hooks/useForm";
import { authApi } from "../../services/auth";
import { LoginBody } from "../../types/types";
import Modal from "../../components/Modal/Modal";
import { IconAlertCircle } from "@tabler/icons-react";

function Login() {
  const [type, setType] = useState("password");
  const { updateData, object } = useForm();
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const switchType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (type === "password") setType("text");
    else setType("password");
  };
  const onUpdateData = (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    updateData(name, value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authApi.loginApi(object as LoginBody);
  };
  useEffect(() => {
    console.log(object);
  }, [object]);
  return (
    <div className={`${st.modal} ${st[mode]}`}>
      <form className={st.form} onSubmit={(e) => onSubmit(e)}>
        <h2>TODO</h2>
        <h3>Log in into your account</h3>
        <div className={st.input}>
          <label>Enter your email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            onChange={(e) => onUpdateData(e)}
            onFocus={(e) => onUpdateData(e)}
            autoComplete="false"
            required
          />
        </div>
        <div className={st.input}>
          <label>Enter your password:</label>
          <input
            type={type}
            name="password"
            placeholder="&_cgtWx01q>hMb?M"
            onChange={(e) => onUpdateData(e)}
            onFocus={(e) => onUpdateData(e)}
            autoComplete="false"
            required
          />
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
      <Modal
        title="¡Ingresaste con exito!"
        text="Serás redireccionado en 5 segundos."
        icon={<IconAlertCircle color="#161722" />}
        color="var(--success)"
      />
    </div>
  );
}
export default Login;
