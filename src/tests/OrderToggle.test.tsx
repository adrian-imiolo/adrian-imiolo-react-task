import OrderToggle from "../tag-page/OrderToggle";
import { render, screen } from "@testing-library/react";

describe("OrderToggle", () => {
  it("should render ArrowUp when order is asc", () => {
    render(<OrderToggle order="asc" onClick={() => {}} />);
    expect(screen.getByTestId("arrow-up")).toBeInTheDocument();
  });

  it("should render ArrowDown when order is asc", () => {
    render(<OrderToggle order="desc" onClick={() => {}} />);
    expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
  });
});
