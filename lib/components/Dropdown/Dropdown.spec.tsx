import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import { DropdownTrigger } from "./DropdownTrigger";

describe("Dropdown tests", () => {
  it("renders", () => {
    const { container } = render(
      <Dropdown>
        <DropdownTrigger>
          <button>trigger</button>
        </DropdownTrigger>
      </Dropdown>,
    );
    const dropdown = container.querySelector("button");
    expect(dropdown).toBeTruthy();
  });
});
