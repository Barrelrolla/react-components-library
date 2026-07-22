import { describe, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Tooltip } from "./Tooltip";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipContent } from "./TooltipContent";

describe("Tooltip tests", () => {
  it("renders", async () => {
    const { container } = render(
      <Tooltip>
        <TooltipTrigger>
          <p>trigger</p>
        </TooltipTrigger>
        <TooltipContent>tooltip</TooltipContent>
      </Tooltip>,
    );
    const trigger = container.querySelector("p");
    let tooltip;
    if (trigger) {
      fireEvent.mouseEnter(trigger);
      await waitFor(() => {
        tooltip = screen.getByText("tooltip");
      });
    }
    expect(tooltip).toBeTruthy();
    if (trigger) {
      fireEvent.mouseLeave(trigger);
      tooltip = screen.queryByText("tooltip");
    }
    expect(tooltip).toBeNull();
  });
});
