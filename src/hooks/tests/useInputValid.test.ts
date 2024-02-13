import { fireEvent } from "@testing-library/dom";
import { renderHook } from "@testing-library/react";

import useInputValid from "hooks/useInputValid";

describe("Hook | useInputValid", () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  document.body.append(input);

  test("Valid min setting", () => {
    fireEvent.change(input, { target: { value: "123" } });

    const { result } = renderHook(() => {
      const isValid = useInputValid();

      return isValid(input, { min: 3 });
    });

    expect(result.current).toBe(false);
  });

  test("Invalid min setting", () => {
    fireEvent.change(input, { target: { value: "12" } });

    const { result } = renderHook(() => {
      const isValid = useInputValid();

      return isValid(input, { min: 3 });
    });

    expect(result.current).toBe("Min length 3");
  });

  test("Valid max setting", () => {
    fireEvent.change(input, { target: { value: "123" } });

    const { result } = renderHook(() => {
      const isValid = useInputValid();

      return isValid(input, { max: 3 });
    });

    expect(result.current).toBe(false);
  });

  test("Invalid max setting", () => {
    fireEvent.change(input, { target: { value: "1234" } });

    const { result } = renderHook(() => {
      const isValid = useInputValid();

      return isValid(input, { max: 3 });
    });

    expect(result.current).toBe("Max length 3");
  });

  test("Valid email setting", () => {
    fireEvent.change(input, { target: { value: "email@mail.com" } });

    const { result } = renderHook(() => {
      const isValid = useInputValid();

      return isValid(input, { isEmail: true });
    });

    expect(result.current).toBe(false);
  });

  test("Invalid email setting", () => {
    fireEvent.change(input, { target: { value: "nonemail" } });

    const { result } = renderHook(() => {
      const isValid = useInputValid();

      return isValid(input, { isEmail: true });
    });

    expect(result.current).toBe("Invalid Email");
  });
});
