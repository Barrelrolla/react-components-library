import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer tests", () => {
  it("renders", () => {
    const { getByText } = render(<Footer>test</Footer>);
    expect(getByText("test")).toBeTruthy();
  });
});
