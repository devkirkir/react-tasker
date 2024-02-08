import useForm from "hooks/useForm";
import { IValidFields } from "hooks/useInputValid";

export interface IInput extends IValidFields {
  value: string;
}

interface IInputs {
  title: IInput;
  desc: IInput;
}

const initialInputs: IInputs = {
  title: { value: "", validSettings: { max: 10, min: 3 } },
  desc: { value: "", validSettings: { isEmail: true } },
};

export const FormAddProject = () => {
  const { values, handleChange } = useForm<IInputs>(initialInputs);

  return (
    <form onChange={handleChange}>
      <input name="title" type="text" defaultValue={values.title.value} />
      {values.title.error && <span>{values.title.error}</span>}

      <input name="desc" type="text" defaultValue={values.desc.value} />
      {values.desc.error && <span>{values.desc.error}</span>}

      <button type="submit">submit</button>
    </form>
  );
};
