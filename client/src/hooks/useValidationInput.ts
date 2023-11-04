import { useState } from "react";

const MESSAGES = {
  lengthMin: "El minimo de caracteres es de 8.",
  lengthMax: "El maximo de caracteres es de 30.",
};
const TYPES = {
  password: "password",
  email: "email",
  text: "text",
};
interface useValidatinoInputInterface {
  type: string;
  regex?: { regex: RegExp; message: string }[];
  max?: number;
  min?: number;
}
const REGEX_DEFAULT = {
  email: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
  password: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
  text: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
};
function useValidatinoInput({
  type,
  regex,
  max = 30,
  min = 8,
}: useValidatinoInputInterface) {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validateGeneral = (value: string) => {
    setError(true);
    // validateLength(value);
    validateRegexByType(value, type);
    // validateCustomRegex(value, regex);
  };

  const validateLength = (value: string) => {
    const lengthValue = value.length + 1;
    if (lengthValue <= min) {
      setMessage(MESSAGES.lengthMin);
    } else if (lengthValue >= max) {
      setMessage(MESSAGES.lengthMax);
    } else {
      console.log("SE falsifica");
      setError(false);
    }
  };

  const validateRegexByType = (value: string, type: string) => {
    setError(true);
    if (type === TYPES.email) {
      validateListRegex(value, REGEX_DEFAULT.email, "Email incorrecto");
    } else if (type === TYPES.password) {
      validateListRegex(value, REGEX_DEFAULT.password, "Contraseña incorrecto");
    } else if (type === TYPES.text) {
      validateListRegex(value, REGEX_DEFAULT.text, "Texto incorrecto");
    }
  };

  const validateListRegex = (
    value: string,
    regexList: RegExp[],
    message: string
  ) => {
    const regexValidate = regexList.some((regex) => {
      if (!regex.test(value)) {
        setMessage(message);
        return true;
      } else {
        return false;
      }
    });
    if (!regexValidate) setError(false);
  };

  const validateCustomRegex = (
    value: string,
    regexs?: { regex: RegExp; message: string }[]
  ) => {
    setError(true);
    if (regexs) {
      regexs.forEach((item) => {
        if (!item.regex.test(value)) {
          console.log("Error de custom regex");
        }
      });
    }
    setError(false);
  };

  return { error, message, validateGeneral };
}
export default useValidatinoInput;
