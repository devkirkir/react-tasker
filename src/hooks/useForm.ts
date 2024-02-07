import { ChangeEvent, useState } from "react";

const useForm = <T>(initState: T) => {
  const [values, setValues] = useState<T>(initState);
  const [errors, setErrors] = useState<T>(initState);

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    setErrors({ ...errors, [name]: !value ? "error" : "" });

    setValues({ ...values, [name]: value });
  };

  return { values, errors, handleChange };
};

export default useForm;
