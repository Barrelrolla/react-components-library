import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar tests", () => {
  it("renders", () => {
    const { getByText } = render(<Navbar>test</Navbar>);
    expect(getByText("test")).toBeTruthy();
  });
});
