import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Dialog } from "./Dialog";

describe("Dialog tests", () => {
  it("renders and supports scrollable content", () => {
    const { getByTestId } = render(
      <Dialog
        isOpen
        setIsOpen={() => {}}
        id="test"
        data-testid="test"
        className="custom-class"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Dialog>,
    );

    const dialog = getByTestId("test");
    expect(dialog).toBeTruthy();
  });
});
