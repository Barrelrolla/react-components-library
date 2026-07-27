import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Sheet } from "./Sheet";

describe("Sheet tests", () => {
  it("renders", () => {
    const { container } = render(<Sheet />);
    const sheet = container.querySelector("div");
    expect(sheet).toBeTruthy();
  });
});
