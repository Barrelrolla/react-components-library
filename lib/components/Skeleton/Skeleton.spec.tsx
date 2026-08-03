import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton tests", () => {
  it("renders", () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector("div");
    expect(skeleton).toBeTruthy();
  });
});
