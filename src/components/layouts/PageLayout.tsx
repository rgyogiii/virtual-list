"use client";
import Footer from "../navigations/Footer";
import Navbar from "../navigations/Navbar";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import muiBreakpoints from "@/components/mui/muiBreakpoints";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiThemeProvider theme={muiBreakpoints}>
      <div className="bg-primary min-w-[360px] min-h-screen custom-scrollbar-container flex flex-col">
        <div>
          <Navbar />
        </div>

        <div className="flex-grow">{children}</div>

        <div>
          <Footer />
        </div>
      </div>
    </MuiThemeProvider>
  );
}
