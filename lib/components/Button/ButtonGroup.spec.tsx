import { render } from "@testing-library/react";
import { Button, ButtonGroup } from "./index";

describe("ButtonGroup", () => {
  it("renders child buttons inside a button group", () => {
    const { container } = render(
      <ButtonGroup>
        <Button>one</Button>
        <Button>two</Button>
      </ButtonGroup>,
    );

    const group = container.querySelector(".btn-group");
    expect(group).toBeTruthy();
    expect(container.querySelectorAll("button")).toHaveLength(2);
    expect(group?.children).toHaveLength(3);
  });

  it("inserts dividers between buttons when divider is enabled", () => {
    const { container } = render(
      <ButtonGroup>
        <Button>one</Button>
        <Button>two</Button>
      </ButtonGroup>,
    );

    const group = container.querySelector(".btn-group");
    expect(group).toBeTruthy();
    expect(group?.children).toHaveLength(3);
    expect(group?.children[0]?.tagName.toLowerCase()).toBe("span");
    expect(group?.children[1]?.tagName.toLowerCase()).toBe("div");
    expect(group?.children[2]?.tagName.toLowerCase()).toBe("span");
    expect(group?.querySelectorAll("button")).toHaveLength(2);
  });

  it("does not render dividers when divider is false", () => {
    const { container } = render(
      <ButtonGroup divider={false}>
        <Button>one</Button>
        <Button>two</Button>
      </ButtonGroup>,
    );

    const group = container.querySelector(".btn-group");
    expect(group).toBeTruthy();
    expect(group?.children).toHaveLength(2);
    expect(group?.children[0]?.tagName.toLowerCase()).toBe("span");
    expect(group?.children[1]?.tagName.toLowerCase()).toBe("span");
    expect(group?.querySelectorAll("button")).toHaveLength(2);
  });

  it("passes group variant and ghostHover to child buttons", () => {
    const { container } = render(
      <ButtonGroup variant="ghost" ghostHover="outline">
        <Button>one</Button>
      </ButtonGroup>,
    );

    const button = container.querySelector("button");
    expect(button).toHaveClass("btn-ghost-outline");
  });

  it("applies the custom group className to the button group wrapper", () => {
    const { container } = render(
      <ButtonGroup className="custom-group">
        <Button>one</Button>
      </ButtonGroup>,
    );

    expect(container.querySelector(".custom-group")).toBeTruthy();
  });

  it("supports vertical layout via the vertical prop", () => {
    const { container } = render(
      <ButtonGroup vertical>
        <Button>one</Button>
        <Button>two</Button>
      </ButtonGroup>,
    );

    const group = container.querySelector(".btn-group");
    expect(group).toHaveClass("flex-col");
  });
});
