import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox tests", () => {
  it("renders", () => {
    const { container } = render(<Checkbox />);
    const checkbox = container.querySelector("label");
    expect(checkbox).toBeTruthy();
  });
});
