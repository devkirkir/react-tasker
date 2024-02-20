import useForm, { type InputValues } from "hooks/useForm";

import Button from "components/shared/Button";
import InputErrorMessage from "components/shared/InputErrorMessage";
import InputText from "components/shared/InputText";

import classes from "./FormAddProject.module.css";
import InputSwitcher from "components/shared/InputSwitcher";
import {
  ShapedIcons,
  ShapedIconsColors,
  ShapedIconsComponents,
} from "components/shared/ShapedIcon/config/ShapedIconConfig";
import { useAppDispatch } from "hooks/useAppDispatch";
import { addNewProject } from "store/slices/projectsSlice/servcies/addNewProject";
import { ProjectsSchema } from "store/slices/projectsSlice/types";

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
  const dispatch = useAppDispatch();

  const { inputsValues, handleSubmit, handleChange, submitButtonDisable } =
    useForm<Inputs>(initialInputs);

  const { projectName, radioIcons, radioColors } = inputsValues;

  const renderIconRadios = Object.entries(ShapedIconsComponents).map(([name, icon], index) => (
    <InputSwitcher
      inputAttributes={{
        name: "radioIcons",
        type: "radio",
        defaultValue: name,
        required: true,
      }}
      key={`radio-${name}-formAddProject-${index}`}
    >
      {icon}
    </InputSwitcher>
  ));

  const renderIconColors = ShapedIconsColors.map((color: ShapedIconsColors, index) => (
    <InputSwitcher
      inputAttributes={{
        name: "radioColors",
        type: "radio",
        defaultValue: color,
        required: true,
      }}
      key={`radio-${color}-formAddProject-${index}`}
    >
      <div
        style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: color }}
      ></div>
    </InputSwitcher>
  ));

  const onSubmit = async () => {
    const newProject: ProjectsSchema = {
      id: `${projectName.value}-${Date.now()}`,
      projectTitle: projectName.value,
      favorite: false,
      icon: {
        iconType: radioIcons.value as ShapedIcons,
        color: radioColors.value as ShapedIconsColors,
      },
    };

    const result = dispatch(addNewProject(newProject));

    // console.log(dispatch(addNewProject(newProject)));
  };

  return (
    <form
      className={classes.Form}
      onSubmit={(event) => handleSubmit(event, onSubmit)}
      onChange={handleChange}
    >
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
        {renderIconRadios}
      </fieldset>

      <fieldset className={classes.Fieldset}>
        <legend>Choose color for icon</legend>
        {renderIconColors}
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
