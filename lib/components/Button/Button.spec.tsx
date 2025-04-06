import { render } from "@testing-library/react";
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
});
