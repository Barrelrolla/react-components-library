import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown tests", () => {
  it("renders", () => {
    const { container } = render(<Dropdown />);
    const dropdown = container.querySelector("div");
    expect(dropdown).toBeTruthy();
  });
});
