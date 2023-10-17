import { useState } from "react";

type dataType = { name: string; value: string }[];
function useForm() {
  const [data, setData] = useState<dataType>([]);
  const [object, setObject] = useState({});
  const updateData = (name: string, value: string) => {
    const cloneData = [...data];
    const newData = { name, value, error: false };
    const element = cloneData.find((item) => item.name === newData.name);
    if (element === undefined) {
      setData([...data, newData]);
    } else {
      element.value = value;
      setData(cloneData);
    }
    arrayToObject();
  };
  const arrayToObject = () => {
    let ourObject = {};
    data.forEach((item) => {
      ourObject = { ...ourObject, [item.name]: item.value };
    });
    setObject(ourObject);
  };

  return { data, updateData, object };
}
export default useForm;
