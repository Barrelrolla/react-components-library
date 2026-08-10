import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Select } from "./Select";

describe("Select tests", () => {
  it("renders", () => {
    const { container } = render(<Select items={[]} />);
    const select = container.querySelector("div");
    expect(select).toBeTruthy();
  });
});
