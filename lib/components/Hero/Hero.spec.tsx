import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero tests", () => {
  it("renders", () => {
    const { getByText } = render(<Hero>test</Hero>);
    expect(getByText("test")).toBeTruthy();
  });
});
