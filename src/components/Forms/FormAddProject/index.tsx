import useForm from "hooks/useForm";
import { type IValidFields } from "hooks/useInputValid";

import Button from "components/shared/Button";
import FormErrorHandler from "components/shared/FormErrorHandler";
import Input from "components/shared/Input";

export interface IInput extends IValidFields {
  value: string;
}

interface IInputs {
  projectName: IInput;
}

const initialInputs: IInputs = {
  projectName: { value: "", validSettings: { min: 1, max: 20 } },
};

const FormAddProject = () => {
  const { inputsValues, handleChange } = useForm<IInputs>(initialInputs);
  const { projectName } = inputsValues;

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

export default FormAddProject;
