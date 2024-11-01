import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme/theme-provider";
import AuthLayout from "./layouts/AuthLayout";
import { ReduxProvider } from "./ReduxProvider";
import { ToastProvider } from "./global/ToastProvider/ToastProvider";
 
const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FLYBOOK | Fly your happyness",
  description: "Your own social app to share knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = false;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ToastProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {user ? <AuthLayout><ReduxProvider>{children}</ReduxProvider> </AuthLayout> : children}
        </ThemeProvider>
      </body>
    </html>
  );
}
