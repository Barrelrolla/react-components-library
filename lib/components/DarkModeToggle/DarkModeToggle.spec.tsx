import { render } from "@testing-library/react";
import { DarkModeContextProvider } from "@/contexts";
import { DarkModeSelector } from "./DarkModeSelector";
import { DarkModeToggle } from "./DarkModeToggle";

describe("Dark Mode Selector test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <DarkModeContextProvider>
        <DarkModeSelector data-testid="test" />
      </DarkModeContextProvider>,
    );
    expect(getByTestId("test")).toBeTruthy();
  });
  it("throws when no dark mode context is provided", () => {
    expect(() => render(<DarkModeSelector data-testid="test" />)).toThrow();
  });
});

describe("Dark Mode Toggle test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <DarkModeContextProvider>
        <DarkModeToggle data-testid="test" />
      </DarkModeContextProvider>,
    );
    expect(getByTestId("test")).toBeTruthy();
  });
  it("throws when no dark mode context is provided", () => {
    expect(() => render(<DarkModeToggle data-testid="test" />)).toThrow();
  });
});
