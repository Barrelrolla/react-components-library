import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Sidemenu } from "./Sidemenu";

describe("Sidemenu tests", () => {
  it("renders", () => {
    const { container } = render(<Sidemenu />);
    const sidemenu = container.querySelector("div");
    expect(sidemenu).toBeTruthy();
  });
});
