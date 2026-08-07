import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Autocomplete } from "./Autocomplete";

describe("Autocomplete tests", () => {
  it("renders", () => {
    const { container } = render(<Autocomplete />);
    const autocomplete = container.querySelector("div");
    expect(autocomplete).toBeTruthy();
  });
});
