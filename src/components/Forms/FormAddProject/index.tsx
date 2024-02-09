import { Button } from "components/shared/Button";
import FormErrorHandler from "components/shared/FormErrorHandler";
import Input from "components/shared/Input";

import useForm from "hooks/useForm";
import { type IValidFields } from "hooks/useInputValid";

export interface IInput extends IValidFields {
  value: string;
}

interface IInputs {
  projectName: IInput;
}

const initialInputs: IInputs = {
  projectName: { value: "", validSettings: { min: 1, max: 20 } },
};

export const FormAddProject = () => {
  const { values, handleChange } = useForm<IInputs>(initialInputs);
  const { projectName } = values;

  return (
    <form onChange={handleChange}>
      <Input
        name="projectName"
        type="text"
        inputmode="text"
        placeholder="Project name"
        defaultValue={projectName.value}
        isError={!!projectName.error}
        required={true}
      />

      {projectName.error && <FormErrorHandler>{projectName.error}</FormErrorHandler>}

      <Button isSubmit={true} type="primary" title="Add Project" />
    </form>
  );
};
