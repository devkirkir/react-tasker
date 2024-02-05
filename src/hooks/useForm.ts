import { ChangeEvent, useState } from "react";

const useForm = <T, S>(initState: T) => {
  const [values, setValues] = useState<T>(initState);
  const [errors, setErrors] = useState<S>();

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    if (value.length < 8) {
      setErrors({ ...errors, [name]: "error" });
    } else {
      // eslint-disable-next-line
      errors.hasOwnProperty(name) ? setErrors({ ...errors, [name]: "" }) : null;
    }

    setValues({ ...values, [name]: value });
  };

  return { values, errors, handleChange };
};

export default useForm;
