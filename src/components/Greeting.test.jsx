import React from "react";
import { describe, expect, it } from "vitest";
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Greeting component", () => {
  it("renders a default greeting", () => {
    render(<Greeting />);

    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders greet with a name", () => {
    render(<Greeting name={'yunus'} />);

    expect(screen.getByText("Hello, yunus!")).toBeInTheDocument();
  });
});
