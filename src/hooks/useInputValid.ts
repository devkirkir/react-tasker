export type ValidSettings = {
  min?: number;
  max?: number;
  isEmail?: boolean;
};

export interface ValidFields {
  validSettings?: ValidSettings | undefined;
  error?: string;
}

const useInputValid = () => {
  const isValid = (input: HTMLFormElement, settings: ValidSettings) => {
    const { value } = input;

    for (const setting in settings) {
      // ну да, не очень элегантно, знаю

      if (setting == "min" && settings[setting] > value.length) {
        return `Min length ${settings[setting]}`;
      }

      if (setting == "max" && settings[setting] < value.length) {
        return `Max length ${settings[setting]}`;
      }

      if (
        setting == "isEmail" &&
        settings[setting] &&
        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
      ) {
        return "Invalid Email";
      }
    }

    return false;
  };

  return { isValid };
};

export default useInputValid;
