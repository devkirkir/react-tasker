import useForm, { type InputValues } from "hooks/useForm";

import Button from "components/shared/Button";
import InputErrorMessage from "components/shared/InputErrorMessage";
import InputText from "components/shared/InputText";
// import InputSwitcher from "components/shared/InputSwitcher";

import classes from "./FormAddProject.module.css";

interface FormAddProjectProps {
  toggleHandler: () => void;
}

interface Inputs {
  projectName: InputValues;
  radioIcons: InputValues;
  radioColors: InputValues;
}

// начальные значения инпутов и их настройка валидации
const initialInputs: Inputs = {
  projectName: { validSettings: { min: 2, max: 15 } },
  radioIcons: { value: "" },
  radioColors: { value: "" },
};

const FormAddProject = (props: FormAddProjectProps) => {
  const { toggleHandler } = props;

  const { inputsValues, handleSubmit, handleChange, submitButtonDisable } =
    useForm<Inputs>(initialInputs);

  const { projectName } = inputsValues;

  return (
    <form className={classes.Form} onSubmit={handleSubmit} onChange={handleChange}>
      <InputText
        inputAttributes={{
          name: "projectName",
          type: "text",
          inputMode: "text",
          placeholder: "Project name",
          defaultValue: projectName.value,
          required: true,
        }}
        isError={!!projectName.error}
        label="Project name"
      />

      {projectName.error && <InputErrorMessage>{projectName.error}</InputErrorMessage>}

      <fieldset className={classes.Fieldset}>
        <legend>Choose icon for project</legend>
      </fieldset>

      <fieldset className={classes.Fieldset}>
        <legend>Choose color for icon</legend>
      </fieldset>

      <div className={classes.Buttons}>
        <Button
          isSubmit={true}
          type="primary"
          title="Add Project"
          isDisabled={submitButtonDisable}
        />

        <Button type="secondary" title="Close" callback={toggleHandler} />
      </div>
    </form>
  );
};

export default FormAddProject;
