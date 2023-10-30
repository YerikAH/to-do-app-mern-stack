/* eslint-disable prefer-const */
import s from "./Modal.module.css";
import { ModalProps } from "../../types/props";
import { useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";

function Modal({ icon, color, title, text, time, reset }: ModalProps) {
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState(100);
  const mode = useAppSelector((state) => state.modeReducer.mode);

  useEffect(() => {
    setActive(true);
    setStatus(100);
    const timeInterval = time / 0.1;
    let counter = 100;
    let timer: number;

    setTimeout(() => {
      timer = setInterval(() => {
        console.log("Ejecución");
        counter = counter - 1;
        setStatus(counter);
        if (counter === 0) {
          clearInterval(timer);
          setActive(false);
        }
      }, timeInterval);
    }, 100);
  }, [time, reset]);
  return (
    <div className={`${s.modal} ${s[mode]} ${s[`${active}`]}`}>
      <div className={s.modal__container}>
        <div
          className={s.modal__counter}
          style={{ backgroundColor: color, width: `${status}%` }}
        ></div>
        <div className={s.icon} style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div>
          <h4 className={s.title}>{title}</h4>
          <p className={s.text}>{text}</p>
        </div>
      </div>
    </div>
  );
}
export default Modal;
