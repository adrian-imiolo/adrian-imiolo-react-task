import OrderToggle from "../tag-page/OrderToggle";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("OrderToggle", () => {
  it("should render ArrowUp when order is asc", () => {
    render(<OrderToggle order="asc" onClick={() => {}} />);
    expect(screen.getByTestId("arrow-up")).toBeInTheDocument();
  });

  it("should render ArrowDown when order is asc", () => {
    render(<OrderToggle order="desc" onClick={() => {}} />);
    expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
  });

  // it("should call onClick when clicked", () => {
  //   let wasClicked = false;
  //   const onClick = () => {
  //     wasClicked = true;
  //   };
  //   render(<OrderToggle order="desc" onClick={onClick} />);
  //   userEvent.click(screen.getByTestId("arrow-down"));
  //   expect(wasClicked).toBe(true);
  // });
});
