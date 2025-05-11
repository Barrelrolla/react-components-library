import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider tests", () => {
  it("renders", () => {
    const { getByTestId } = render(<Divider data-testid="test" />);
    expect(getByTestId("test")).toBeTruthy();
  });
});
