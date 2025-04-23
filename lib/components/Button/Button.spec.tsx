import { render } from "@testing-library/react";
import { vi } from "vitest";
import { Button } from "./Button";

describe("Button test", () => {
  it("renders", () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText("test")).toBeTruthy();
  });
  it("is rendered as a button by default", () => {
    const { container } = render(<Button>test</Button>);
    const button = container.querySelector("button");
    expect(button).toBeTruthy();
  });
  it("is rendered as an anchor when the 'as' prop is provided an 'a' tag", () => {
    const { container } = render(
      <Button as="a" href="/">
        link
      </Button>,
    );
    const a = container.querySelector("a");
    expect(a).toBeTruthy();
  });
  it("can be clicked", () => {
    const clickHandler = vi.fn();
    const { getByText } = render(<Button onClick={clickHandler}>test</Button>);
    const button = getByText("test");
    button.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
  it("should not be clicked if disabled", () => {
    const clickHandler = vi.fn();
    const { getByText } = render(
      <Button disabled onClick={clickHandler}>
        test
      </Button>,
    );
    const button = getByText("test");
    button.click();
    expect(clickHandler).toHaveBeenCalledTimes(0);
  });
});
