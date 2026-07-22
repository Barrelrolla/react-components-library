import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip tests", () => {
  it("renders", () => {
    const { container } = render(<Tooltip />);
    const tooltip = container.querySelector("div");
    expect(tooltip).toBeTruthy();
  });
});
