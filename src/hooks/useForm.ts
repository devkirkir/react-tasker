import { ChangeEvent, useState } from "react";
import useInputValid, { type IValidFields } from "./useInputValid";

const useForm = <T>(initState: T) => {
  const [values, setValues] = useState<T>(initState);

  const { isValid } = useInputValid();

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    // это типа костыль я хз, иначе не видит типизацию
    const { validSettings }: IValidFields = initState[name as keyof T];

    const resultValidation = isValid(event.target, validSettings);

    if (validSettings && Boolean(resultValidation)) {
      setValues({
        ...values,
        [name]: { ...values[name as keyof T], value, error: resultValidation },
      });
    } else {
      setValues({
        ...values,
        [name]: { ...values[name as keyof T], value, error: "" },
      });
    }
  };

  return { values, handleChange };
};

export default useForm;
