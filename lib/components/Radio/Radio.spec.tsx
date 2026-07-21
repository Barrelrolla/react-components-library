import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio tests", () => {
  it("renders", () => {
    const { container } = render(<Radio />);
    const radio = container.querySelector("label");
    expect(radio).toBeTruthy();
  });
});
