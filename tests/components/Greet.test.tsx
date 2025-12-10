
import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name provided", () => {
    render(<Greet name="yunus" />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Hello yunus/i)
  });

  it("should render login button  when name is not provided", () => {
    render(<Greet  />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Login/i)
  });
});
