import { render, screen } from "@testing-library/react";
import CoinList from "../views/CoinList";

test("test the display of pagination in Coinlistpage", () => {
  render(<CoinList />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
