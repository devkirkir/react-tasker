import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import useInputValid, { type IValidFields } from "./useInputValid";

export interface IInput extends IValidFields {
  value?: string;
  checked?: boolean;
}

const useForm = <T>(initState: T) => {
  const [inputsValues, setInputsValues] = useState<T>(initState);
  const [submitDisable, setSubmitDisable] = useState(true);

  // useEffect(() => {
  //   let obj = {};

  //   for (let key in initState) {
  //     obj = {
  //       [key]: { ...initState[key], error: "" },
  //     };
  //   }

  //   setInputsValues(obj as T);
  // }, []);

  const { isValid } = useInputValid();

  const checkErrors = () => {
    for (const key in inputsValues) {
      const { error }: IValidFields = inputsValues[key];

      error || error === undefined ? setSubmitDisable(true) : setSubmitDisable(false);
    }
  };

  useEffect(() => checkErrors(), [inputsValues]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value, type } = event.target;

    if (type == "text") {
      // это типа костыль я хз, иначе не подхватывает типизацию
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
    }
  };

  return { inputsValues, handleSubmit, handleChange, submitDisable };
};

export default useForm;
