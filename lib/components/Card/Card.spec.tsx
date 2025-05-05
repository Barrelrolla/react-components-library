import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card tests", () => {
  it("renders", () => {
    const { getByText } = render(<Card>test</Card>);
    expect(getByText("test")).toBeTruthy();
  });
});
