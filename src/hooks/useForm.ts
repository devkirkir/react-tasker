import { ChangeEvent, useState } from "react";

const useForm = <T>(initState: T) => {
  const [values, setValues] = useState<T>(initState);

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return { values, handleChange };
};

export default useForm;
