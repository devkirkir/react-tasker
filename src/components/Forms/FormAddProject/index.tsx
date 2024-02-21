import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import useForm, { type InputValues } from "hooks/useForm";

import Button from "components/shared/Button";
import InputErrorMessage from "components/shared/InputErrorMessage";
import InputText from "components/shared/InputText";
import InputSwitcher from "components/shared/InputSwitcher";

import { addNewProject } from "store/slices/projectsSlice/servcies/addNewProject";
import { projectsActions } from "store/slices/projectsSlice";

import { ProjectsSchema } from "store/slices/projectsSlice/types";
import {
  ShapedIcons,
  ShapedIconsColors,
  ShapedIconsComponents,
} from "components/shared/ShapedIcon/config/ShapedIconConfig";

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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    const projectId = `${projectName.value}-${Date.now()}`;
    const newProject: ProjectsSchema = {
      id: projectId,
      projectTitle: projectName.value,
      favorite: false,
      icon: {
        iconType: radioIcons.value as ShapedIcons,
        color: radioColors.value as ShapedIconsColors,
      },
    };

    dispatch(addNewProject(newProject));
    dispatch(projectsActions.setCurrentProjectId(projectId));

    toggleHandler();

    navigate(`/app/projects/${projectId}`);
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
