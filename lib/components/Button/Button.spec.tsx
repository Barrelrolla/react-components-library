import { vi } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its children", () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText("test")).toBeTruthy();
  });

  it("renders a native button by default", () => {
    const { container } = render(<Button>test</Button>);
    expect(container.querySelector("button")).toBeTruthy();
  });

  it("renders a different element when the 'as' prop is provided", () => {
    const { container } = render(
      <Button as="a" href="/">
        link
      </Button>,
    );
    expect(container.querySelector("a")).toBeTruthy();
  });

  it("calls onClick when clicked", () => {
    const clickHandler = vi.fn();
    const { getByText } = render(<Button onClick={clickHandler}>test</Button>);
    getByText("test").click();
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const clickHandler = vi.fn();
    const { getByText } = render(
      <Button disabled onClick={clickHandler}>
        test
      </Button>,
    );
    getByText("test").click();
    expect(clickHandler).toHaveBeenCalledTimes(0);
  });

  it("disables the button when loading", () => {
    const clickHandler = vi.fn();
    const { getByText, container } = render(
      <Button loading onClick={clickHandler}>
        test
      </Button>,
    );

    expect(container.querySelector("button")).toBeDisabled();
    getByText("test").click();
    expect(clickHandler).toHaveBeenCalledTimes(0);
  });

  it("renders a spinner when loading", () => {
    const { container } = render(<Button loading>test</Button>);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("renders spinner at the end when loadingPosition is 'end'", () => {
    const { getByText, container } = render(
      <Button loading loadingPosition="end">
        test
      </Button>,
    );

    const button = getByText("test");
    expect(button.nextElementSibling).toBeNull();
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("supports selected state with data attribute", () => {
    const { getByText } = render(<Button selected>test</Button>);
    expect(getByText("test")).toHaveAttribute("data-selected", "true");
  });

  it("applies wrapperClasses to the button wrapper", () => {
    const { container } = render(
      <Button wrapperClasses="wrapper-test">test</Button>,
    );
    expect(container.querySelector("span.wrapper-test")).toBeTruthy();
  });

  it("applies custom className to the button element", () => {
    const { container } = render(
      <Button className="custom-class">test</Button>,
    );
    expect(container.querySelector("button.custom-class")).toBeTruthy();
  });

  it("uses the resolved color variables on the button element", () => {
    const { container } = render(<Button color="secondary">test</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveStyle({
      "--bg-color": "var(--color-secondary-content)",
      "--fg-color": "var(--color-secondary)",
    });
  });

  it("renders ghost variant with the selected ghost hover class", () => {
    const { container } = render(
      <Button variant="ghost" ghostHover="fill">
        ghost
      </Button>,
    );
    expect(container.querySelector("button")).toHaveClass("btn-ghost-fill");
  });
});
