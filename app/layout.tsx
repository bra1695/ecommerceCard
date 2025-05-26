import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Extension",
  description: "Manage Extension",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}