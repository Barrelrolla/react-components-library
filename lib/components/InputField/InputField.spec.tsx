import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { InputField } from "./InputField";

describe("Input tests", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <InputField label="test" id="test" name="test" data-testid="test" />,
    );
    expect(getByTestId("test")).toBeTruthy();
  });
});
