import { MAIL_REGEXP, RU_EN_DIGITS_REGEXP } from "consts/regexp";

export type ValidSettings = {
  min?: number;
  max?: number;
  isEmail?: boolean;
  pattern?: RegExp;
};

export interface ValidFields {
  validSettings?: ValidSettings | undefined;
  error?: string;
}

const useInputValid = () => {
  const isValid = (input: HTMLFormElement | HTMLInputElement, settings: ValidSettings) => {
    const { value } = input;

    for (const setting in settings) {
      // ну да, не очень элегантно, знаю

      if (setting == "min" && settings[setting] > value.length) {
        return `Min length ${settings[setting]}`;
      }

      if (setting == "max" && settings[setting] < value.length) {
        return `Max length ${settings[setting]}`;
      }

      if (setting == "isEmail" && !MAIL_REGEXP.test(value)) {
        return "Invalid Email";
      }

      if (setting == "pattern" && !RU_EN_DIGITS_REGEXP.test(value)) {
        return "Invalid Pattern";
      }
    }

    return false;
  };

  return isValid;
};

export default useInputValid;
