import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import useInputValid, { type ValidFields } from "./useInputValid";

export interface InputValues extends ValidFields {
  value?: string;
  checked?: boolean;
}

const useForm = <T>(initState: T) => {
  const [inputsValues, setInputsValues] = useState<T>(initState);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  // проверяем на ошибки все поля, и меняем состояние
  const changeStateSubmitByErrors = () => {
    for (const key in inputsValues) {
      const { error }: ValidFields = inputsValues[key];

      if (error || error === undefined) {
        setSubmitButtonDisable(true);
        return;
      }

      setSubmitButtonDisable(false);
    }
  };

  useEffect(() => changeStateSubmitByErrors(), [inputsValues]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const isValid = useInputValid();

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    // это типа костыль я хз, иначе не подхватывает типизацию
    const { validSettings }: ValidFields = initState[name as keyof T];

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

  return { inputsValues, handleSubmit, handleChange, submitButtonDisable };
};

export default useForm;
