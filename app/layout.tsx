import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import RecoilRootProvider from "@/components/RecoilRootProvider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

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
    <RecoilRootProvider>
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
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </RecoilRootProvider>
  );
}
