import SectionTitle from "@/components/section-title";
import { render, screen } from "@testing-library/react";

describe("SectionTitle Component", () => {
  it("renders the title with default styling", () => {
    render(<SectionTitle title="Test Title" />);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(
      "text-[15px] text-gray-600 text-left font-semibold"
    );
  });

  it("renders the subtitle when provided", () => {
    render(<SectionTitle title="Test Title" subtitle="Test Subtitle" />);

    const subtitleElement = screen.getByText("Test Subtitle");
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveClass(
      "text-[24px] sm:text-[35px] text-left font-medium font-montAlt dark:text-gray-100"
    );
  });

  it("applies custom classes to title", () => {
    render(<SectionTitle title="Test Title" titleClass="custom-title-class" />);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toHaveClass("custom-title-class");
  });

  it("applies custom classes to subtitle", () => {
    render(
      <SectionTitle
        title="Test Title"
        subtitle="Test Subtitle"
        subtitleClass="custom-subtitle-class"
      />
    );

    const subtitleElement = screen.getByText("Test Subtitle");
    expect(subtitleElement).toHaveClass("custom-subtitle-class");
  });

  it("does not render the subtitle when it is not provided", () => {
    render(<SectionTitle title="Test Title" />);

    const subtitleElement = screen.queryByText("Test Subtitle");
    expect(subtitleElement).toBeNull();
  });
});
