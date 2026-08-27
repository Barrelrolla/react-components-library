import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination tests", () => {
  it("renders", () => {
    const { container } = render(
      <Pagination currentPage={1} onPageChange={() => {}} pageCount={20} />,
    );
    const pagination = container.querySelector("div");
    expect(pagination).toBeTruthy();
  });
});
