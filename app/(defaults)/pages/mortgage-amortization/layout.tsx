import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galera Template | Mortgage Amortization Calculator",
  description: "Discover your dream home with Galere Real Estate.",
};
export default function MortgageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>{children}</>
    </>
  );
}
