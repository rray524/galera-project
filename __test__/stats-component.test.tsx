import React from "react";
import { render, screen } from "@testing-library/react";
import StatsSection from "@/app/(defaults)/pages/about-us/components/stats-component";

describe("StatsSection Component", () => {
  it("renders the correct number of StatItem components", () => {
    render(<StatsSection />);

    const statItems = screen.getAllByRole("heading", { level: 2 });
    expect(statItems).toHaveLength(4);
  });

  it("displays the correct values and labels", () => {
    render(<StatsSection />);

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Years Experience")).toBeInTheDocument();

    expect(screen.getByText("300")).toBeInTheDocument();
    expect(screen.getByText("New Properties")).toBeInTheDocument();

    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Happy Customers")).toBeInTheDocument();

    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("Awards Win")).toBeInTheDocument();
  });

  it("applies correct classes for styling", () => {
    render(<StatsSection />);

    const valueElement = screen.getByText("10");
    expect(valueElement).toHaveClass("text-6xl font-bold text-yellow-500");

    const labelElement = screen.getByText("Years Experience");
    expect(labelElement).toHaveClass(
      "text-xl font-medium text-gray-700 dark:text-gray-300"
    );
  });

  it("renders in a responsive layout", () => {
    render(<StatsSection />);

    const container = screen.getByTestId("stats-container");
    expect(container).toHaveClass("flex-col md:flex-row");
  });
});
