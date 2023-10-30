import { useState } from "react";
import st from "./Login.module.css";
import google from "../../assets/google.png";
import { useAppSelector } from "../../redux/hook";
import useForm from "../../hooks/useForm";
import { authApi } from "../../services/auth";
import { LoginBody, LoginResponse } from "../../types/types";
import Modal from "../../components/Modal/Modal";
import { IconAlertCircle } from "@tabler/icons-react";
import Input from "../../components/Input/Input";

const SUCCESS = {
  color: "var(--success)",
  title: "¡Ingresaste con exito!",
  text: "Serás redireccionado en 5 segundos",
  icon: <IconAlertCircle color="#161722" />,
};
const ERROR = {
  color: "var(--error)",
  title: "¡Surgio un error!",
  text: "Revisa tus credenciales",
  icon: <IconAlertCircle color="#161722" />,
};

function Login() {
  const [modal, setModal] = useState(SUCCESS);
  const [counter, setCounter] = useState(0);
  const { updateData, object } = useForm();
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const onUpdateData = (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    updateData(name, value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(object);
    setCounter(counter + 1);
    const res = await authApi.loginApi(object as LoginBody);
    if (res instanceof LoginResponse) {
      setModal(SUCCESS);
    } else {
      setModal(ERROR);
    }
  };
  return (
    <div className={`${st.modal} ${st[mode]}`}>
      <form className={st.form} onSubmit={(e) => onSubmit(e)}>
        <h2>TODO</h2>
        <h3>Log in into your account</h3>
        <Input
          label="Enter your enmail:"
          name="email"
          onChange={onUpdateData}
          placeholder="example@example.com"
          type="email"
        />
        <Input
          label="Enter your password:"
          name="password"
          onChange={onUpdateData}
          placeholder="&_cgtWx01q>hMb?M"
          type="password"
        />
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
      {counter >= 1 && (
        <Modal
          title={modal.title}
          text={modal.text}
          icon={modal.icon}
          color={modal.color}
          reset={counter}
          time={5}
        />
      )}
    </div>
  );
}
export default Login;
