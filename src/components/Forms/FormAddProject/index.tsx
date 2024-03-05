import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import useForm, { type InputValues } from "hooks/useForm";

import { InputErrorMessage, InputSwitcher, InputText } from "components/shared/Inputs";
import Button from "components/shared/Button";
import ColorCircle from "components/shared/ColorCircle";
import ShapedIcon from "components/shared/ShapedIcon";

import { currentProjectActions } from "store/slices/currentProjectSlice";
import { addNewProject } from "store/slices/projectsSlice/servcies/addNewProject";

import type { ProjectSchema } from "store/slices/projectsSlice/types";
import {
  ShapedIcons,
  ShapedIconsColors,
  ShapedIconsComponents,
} from "components/shared/ShapedIcon/config/ShapedIconConfig";

import { RU_EN_DIGITS_REGEXP } from "consts/regexp";

import classes from "./FormAddProject.module.css";

interface FormAddProjectProps {
  toggleHandler: () => void;
}

// интерфейс с типами для полей формы
interface Inputs {
  projectName: InputValues;
  radioIcons: InputValues;
  radioColors: InputValues;
}

// начальные значения инпутов и их настройка валидации
// ключ объекта initialInputs равен атрибуту name в инпутах
const initialInputs: Inputs = {
  projectName: { validSettings: { min: 2, max: 15, pattern: RU_EN_DIGITS_REGEXP } },
  radioIcons: { value: "" },
  radioColors: { value: "" },
};

const FormAddProject = (props: FormAddProjectProps) => {
  const { toggleHandler } = props;

  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // инициализируем кастомный хук useForm c initialInputs и вытаскиваем из него методы
  const { inputsValues, handleSubmit, handleChange, submitButtonDisable } =
    useForm<Inputs>(initialInputs);

  const { projectName, radioIcons, radioColors } = inputsValues;

  // рендерим радио кнопки с иконками
  const renderIconRadios = Object.entries(ShapedIconsComponents).map(([name], index) => (
    <InputSwitcher
      inputAttributes={{
        name: "radioIcons",
        type: "radio",
        defaultValue: name,
        required: true,
      }}
      key={`radio-${name}-formAddProject-${index}`}
    >
      <ShapedIcon
        iconType={name as ShapedIcons}
        color={(radioColors.value as ShapedIconsColors) || "#2a7de1"}
      />
    </InputSwitcher>
  ));

  // рендерим радио кнопки с цветами для иконок
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
      <ColorCircle color={color} />
    </InputSwitcher>
  ));

  const onSubmit = () => {
    // формируем id проекта
    const projectId = `${projectName.value}-${Date.now()}`;

    // формируем объект нового проекта
    const newProject: ProjectSchema = {
      id: projectId,
      projectTitle: projectName.value,
      favorite: false,
      icon: {
        iconType: radioIcons.value as ShapedIcons,
        color: radioColors.value as ShapedIconsColors,
      },
    };

    // добавляем новый проект
    dispatch(addNewProject(newProject));

    // устанавливаем новый проект как текущий проект
    dispatch(currentProjectActions.setCurrentProject(newProject));

    // закрываем модалку
    toggleHandler();

    // перенаправляем на только что созданный проект
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
        ref={myRef}
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
