import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import ThemeProvider from "providers/ThemeProvider";
import useTheme, { ThemeVariants } from "../useTheme";

describe("Hook | useTheme", () => {
  test("Toggle themes", () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe(ThemeVariants.LIGHT);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe(ThemeVariants.DARK);
  });
});
