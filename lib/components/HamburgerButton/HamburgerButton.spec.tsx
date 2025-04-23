import { render } from "@testing-library/react";
import { HamburgerButton } from "./HamburgerButton";

describe("Hamburger button test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <HamburgerButton data-testid="test" isOpen={false} />,
    );
    expect(getByTestId("test")).toBeTruthy();
  });
});
