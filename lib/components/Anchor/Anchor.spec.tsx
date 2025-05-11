import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Anchor } from "./Anchor";

describe("Anchor tests", () => {
  it("renders", () => {
    const { getByText } = render(<Anchor>test</Anchor>);
    expect(getByText("test")).toBeTruthy();
  });
  it("renders as an anchor", () => {
    const { container } = render(<Anchor>test</Anchor>);
    const anchor = container.querySelector("a");
    expect(anchor).toBeTruthy();
  });
  it("renders as a span", () => {
    const { container } = render(<Anchor as="span">test</Anchor>);
    const anchor = container.querySelector("span");
    expect(anchor).toBeTruthy();
  });
});
