import { ChangeEvent, useState } from "react";

import useInputValid, { type IValidFields } from "./useInputValid";

const useForm = <T>(initState: T) => {
  const [inputsValues, setInputsValues] = useState<T>(initState);

  const { isValid } = useInputValid();

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    // это типа костыль я хз, иначе не видит типизацию
    const { validSettings }: IValidFields = initState[name as keyof T];

    const resultValidation = isValid(event.target, validSettings);

    if (validSettings && Boolean(resultValidation)) {
      setInputsValues({
        ...inputsValues,
        [name]: { ...inputsValues[name as keyof T], value, error: resultValidation },
      });
    } else {
      setInputsValues({
        ...inputsValues,
        [name]: { ...inputsValues[name as keyof T], value, error: "" },
      });
    }
  };

  return { inputsValues, handleChange };
};

export default useForm;
