import { ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import theme from "src/theme";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout = (page: NextPage) => {
  return (
    <main className="py-2 px-8">
      <LayoutErrorBoundary>
        <ThemeProvider theme={theme}>{page}</ThemeProvider>
      </LayoutErrorBoundary>

      {/* Loading Chrome scripts */}
      <script defer src="../content.js"></script>
      <script defer src="../background.js"></script>
    </main>
  );
};
