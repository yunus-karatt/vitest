import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import UserProfile from "./UserProfile";

describe("User Profile", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });
  it("fetched and displays user data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: "Jhon",
        email: "jhon@gmail.com",
      }),
    });
    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(()=>{
        expect(screen.getByRole('heading',{name:/jhon/i})).toBeInTheDocument()
        expect(screen.getByText(/jhon@gmail.com/i)).toBeInTheDocument()
    })
  });
});
