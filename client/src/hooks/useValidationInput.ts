import { useState } from "react";

const MESSAGES = {
  lengthMin: "",
  lengthMax: "",
};
interface useValidatinoInputInterface {
  type: string;
  regex?: RegExp;
  max?: number;
  min?: number;
}
function useValidatinoInput({
  type,
  regex,
  max = 30,
  min = 6,
}: useValidatinoInputInterface) {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validateGeneral = (value: string) => {
    setError(true);
    validateLength(value);
  };
  const validateLength = (value: string) => {
    if (value.length < min) {
      setMessage(MESSAGES.lengthMin);
    } else if (value.length > max) {
      setMessage(MESSAGES.lengthMax);
    } else {
      setError(false);
    }
  };
  return { error, message, validateGeneral };
}
export default useValidatinoInput;
