import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import RecoilRootProvider from "@/components/RecoilRootProvider";
import localFont from "next/font/local";

const pretendardFont = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1am",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`min-h-screen bg-background antialiased ${pretendardFont.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RecoilRootProvider>{children}</RecoilRootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
