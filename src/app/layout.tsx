import type { Metadata } from "next";
import theme from "@/styles/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "@/styles/global.css";
import MainHeader from "@/templates/headers/MainHeader";

export const metadata: Metadata = {
  title: "taskchin",
  description: "persian task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainHeader />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
