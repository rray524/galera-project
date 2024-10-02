import React from "react";
import { render, screen } from "@testing-library/react";
import { formatPrice } from "@/helpers/utils";
import { Card } from "@/app/(defaults)/pages/home/contents/property-listing/component";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

describe("Card Component", () => {
  const defaultProps = {
    imgSrc: "/path/to/image.jpg",
    status: "For Sale",
    title: "Beautiful Home",
    location: "Los Angeles, CA",
    price: "500000",
    beds: 4,
    baths: 3,
    link: "beautiful-home",
    category: "Residential",
  };

  it("renders the property title, location, price, beds, and baths", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText("Beautiful Home")).toBeInTheDocument();

    expect(screen.getByText("Los Angeles, CA")).toBeInTheDocument();

    expect(screen.getByText(formatPrice("500000"))).toBeInTheDocument();

    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders the status and category badges", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText("For Sale")).toBeInTheDocument();

    expect(screen.getByText("Residential")).toBeInTheDocument();
  });

  it("renders the image with the correct src and alt text", () => {
    render(<Card {...defaultProps} />);

    const imgElement = screen.getByAltText("card");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/path/to/image.jpg");
  });

  it("renders the correct link to the property details page", () => {
    render(<Card {...defaultProps} />);

    const linkElement = screen.getByRole("link", {
      name: /beautiful home/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/properties/beautiful-home");
  });

  it("renders the correct icons for location, beds, and baths", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByTestId("fa-map-marker-alt")).toBeInTheDocument();
    expect(screen.getByTestId("fa-bed")).toBeInTheDocument();
    expect(screen.getByTestId("fa-bath")).toBeInTheDocument();
  });
});
