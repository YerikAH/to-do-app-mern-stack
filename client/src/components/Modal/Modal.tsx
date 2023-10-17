import s from "./Modal.module.css";
import { ModalProps } from "../../types/props";

function Modal({ icon, color, title, text }: ModalProps) {
  return (
    <div className={s.modal}>
      <div className={s.modal__container}>
        <div
          className={s.modal__counter}
          style={{ backgroundColor: color }}
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
