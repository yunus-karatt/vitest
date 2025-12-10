import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
    it("should render username", () => {
        render(<UserAccount user={{ name: 'yunus', id: 1 }} />);

        const user = screen.getByText("yunus");
        expect(user).toBeInTheDocument();
    });
    it("should render edit button if admin", () => {
        render(<UserAccount user={{ name: 'yunus', id: 1, isAdmin: true }} />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Edit/i)
    });
    it("should not render edit button if not admin", () => {
        render(<UserAccount user={{ name: 'yunus', id: 1, isAdmin: false }} />);

        const button = screen.queryByRole("button");
        expect(button).not.toBeInTheDocument();
    });


});
