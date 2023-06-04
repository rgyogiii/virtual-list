import "../components/styles/globals.css";
import { Inter } from "next/font/google";
import PageLayout from "@/components/layouts/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Virtual List",
  description: "Created by romargeorge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
