import { fireEvent } from "@testing-library/dom";
import { renderHook } from "@testing-library/react";

import useForm, { InputValues } from "hooks/useForm";

describe("Hook | useForm", () => {
  const form = document.createElement("form"),
    input = document.createElement("input");

  input.setAttribute("type", "text");

  document.body.append(form);
  document.querySelector("form").append(input);

  interface Inputs {
    inputName: InputValues;
  }

  const initState: Inputs = {
    inputName: { value: "", validSettings: { min: 5 } },
  };

  test("submitButtonDisable is DISABLED", () => {
    fireEvent.change(input, { target: { value: "123" } });

    const { result } = renderHook(() => {
      const { submitButtonDisable } = useForm(initState);

      return submitButtonDisable;
    });

    expect(result.current).toBe(true);
  });

  // test("submitButtonDisable is ENABLE", async () => {
  //   const user = userEvent.setup();

  //   await user.type(input, "12345");

  //   const { result } = renderHook(() => {
  //     const { submitButtonDisable } = useForm(initState);

  //     console.log(input);

  //     return submitButtonDisable;
  //   });

  //   expect(result.current).toBe(false);
  // });
});
