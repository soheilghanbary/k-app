import { useTheme } from "next-themes";
import { MoonIcon } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="mb-4 box-border flex items-center justify-between border-b p-4">
      <h3 className="text-lg font-semibold text-foreground-secondary">
        Kobino
      </h3>
      <ToggleTheme />
    </nav>
  );
}

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <button className="flex justify-center items-center p-2 rounded-lg border" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <MoonIcon className="w-5 h-5" />
    </button>
  );
}
