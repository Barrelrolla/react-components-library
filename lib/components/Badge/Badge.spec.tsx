import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge tests", () => {
  it("renders", () => {
    const { container } = render(<Badge />);
    const badge = container.querySelector("div");
    expect(badge).toBeTruthy();
  });

  it("renders children", () => {
    const { getByText } = render(<Badge>Label</Badge>);
    expect(getByText("Label")).toBeTruthy();
  });

  it("applies custom className and color variables", () => {
    const { getByText } = render(
      <Badge color="primary" className="custom-badge">
        Primary
      </Badge>,
    );
    const badge = getByText("Primary");
    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("custom-badge");
    expect(badge).toHaveStyle("--bg-color: var(--color-primary)");
    expect(badge).toHaveStyle("--fg-color: var(--color-primary-content)");
  });
});
