import { describe, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Popover } from "./Popover";
import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverContent } from "./PopoverContent";

describe("Popover tests", () => {
  it("renders", async () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>
          <p>trigger</p>
        </PopoverTrigger>
        <PopoverContent>popover</PopoverContent>
      </Popover>,
    );
    const trigger = container.querySelector("p");
    let popover;
    if (trigger) {
      fireEvent.mouseEnter(trigger);
      await waitFor(() => {
        popover = screen.getByText("popover");
      });
    }
    expect(popover).toBeTruthy();
    if (trigger) {
      fireEvent.mouseLeave(trigger);
      popover = screen.queryByText("popover");
    }
    expect(popover).toBeNull();
  });
});
