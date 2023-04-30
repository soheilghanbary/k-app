import type { ReactNode } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
    <div className="container p-4 max-w-screen-xl">
      <Navbar />
      <div className="flex gap-4">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
    <Toaster position="bottom-left" reverseOrder />
    </ThemeProvider>
  );
}
