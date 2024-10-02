import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galera Template | Mortgage Payment Calculator",
  description: "Discover your dream home with Galere Real Estate.",
};
export default function MortgagePaymentLayout({
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
