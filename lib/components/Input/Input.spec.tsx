import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input tests", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Input label="test" id="test" name="test" data-testid="test" />,
    );
    expect(getByTestId("test")).toBeTruthy();
  });
});
