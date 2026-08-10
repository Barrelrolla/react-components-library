import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Autocomplete } from "./Autocomplete";
import { AutocompleteContent } from "./AutocompleteContent";

describe("Autocomplete tests", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <Autocomplete
        items={[]}
        query=""
        isOpen={true}
        setIsOpen={() => {}}
        onSelectItem={() => {}}
      >
        <AutocompleteContent data-testid="test" />
      </Autocomplete>,
    );
    const autocomplete = getByTestId("test");
    expect(autocomplete).toBeTruthy();
  });
});
