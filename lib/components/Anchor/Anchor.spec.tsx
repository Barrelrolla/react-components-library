import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Anchor } from "./Anchor";

describe("Anchor tests", () => {
  it("renders", () => {
    const { getByText } = render(<Anchor>test</Anchor>);
    expect(getByText("test")).toBeTruthy();
  });
});
