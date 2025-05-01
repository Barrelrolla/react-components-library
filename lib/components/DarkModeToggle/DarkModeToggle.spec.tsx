import { render } from "@testing-library/react";
import { DarkModeSelector } from "./DarkModeSelector";
import { DarkModeToggle } from "./DarkModeToggle";
import { ThemeContextProvider } from "@/contexts";

describe("Dark Mode Selector test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <ThemeContextProvider>
        <DarkModeSelector data-testid="test" />
      </ThemeContextProvider>,
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
      <ThemeContextProvider>
        <DarkModeToggle data-testid="test" />
      </ThemeContextProvider>,
    );
    expect(getByTestId("test")).toBeTruthy();
  });
  it("throws when no dark mode context is provided", () => {
    expect(() => render(<DarkModeToggle data-testid="test" />)).toThrow();
  });
});
