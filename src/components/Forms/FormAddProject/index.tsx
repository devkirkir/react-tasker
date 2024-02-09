import useForm, { type IInput } from "hooks/useForm";

import Button from "components/shared/Button";
import FormErrorHandler from "components/shared/FormErrorHandler";
import Input from "components/shared/Input";

import classes from "./FormAddProject.module.css";

interface IFormAddProjectProps {
  toggleHandler: () => void;
}

interface IInputs {
  projectName: IInput;
}

const initialInputs: IInputs = {
  projectName: { value: "", validSettings: { min: 2, max: 15 } },
};

const FormAddProject = (props: IFormAddProjectProps) => {
  const { toggleHandler } = props;

  const { inputsValues, handleSubmit, handleChange, submitDisable } =
    useForm<IInputs>(initialInputs);
  const { projectName } = inputsValues;

  return (
    <form className={classes.Form} onSubmit={handleSubmit} onChange={handleChange}>
      <Input
        name="projectName"
        type="text"
        inputMode="text"
        placeholder="Project name"
        defaultValue={projectName.value}
        iserror={projectName.error ? 1 : undefined}
        required={true}
      />

      {projectName.error && <FormErrorHandler>{projectName.error}</FormErrorHandler>}

      <Input name="checkbox" type="checkbox" required={false} defaultChecked={false} />

      <div className={classes.Buttons}>
        <Button isSubmit={true} type="primary" title="Add Project" isDisabled={submitDisable} />

        <Button type="secondary" title="Close" callback={toggleHandler} />
      </div>
    </form>
  );
};

export default FormAddProject;
