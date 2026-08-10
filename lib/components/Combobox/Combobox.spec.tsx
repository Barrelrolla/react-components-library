import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Combobox } from "./Combobox";

describe("Combobox tests", () => {
  it("renders", () => {
    const { container } = render(<Combobox />);
    const combobox = container.querySelector("div");
    expect(combobox).toBeTruthy();
  });
});
