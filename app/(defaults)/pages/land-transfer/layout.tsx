import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galera Template | Land Transfer Calculator",
  description: "Discover your dream home with Galere Real Estate.",
};
export default function LandTransferLayout({
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
