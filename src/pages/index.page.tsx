import { Box, Button, Typography } from "@mui/material";
import type { CustomNextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Layout } from "src/layout";

// chrome APIを使用するためdynamic importし、browser側でのみ読み込まれるようにする
const Buttond = dynamic(
  async () => {
    const module = await import("src/components/Button");
    return module.Button;
  },
  {
    ssr: false,
    loading: () => {
      return <div className="w-10 h-4 bg-gray-100 rounded border animate-pulse"></div>;
    },
  },
);
const handleSendMessageToBackground = () => {
  chrome.runtime.sendMessage({ type: "FROM_POPUP", data: "Hello from popup" }, (response) => {
    // eslint-disable-next-line
    console.log("Response from background:", response);
  });
};
const IndexPage: CustomNextPage = () => {
  return (
    <Box>
      <Typography variant="h1">Chrome Extension Template</Typography>
      <Buttond />
      <Button
        variant="contained"
        sx={{
          color: "#013eb7",
          fontSize: "14px",
          minWidth: "auto",
          textDecoration: "none",
        }}
        onClick={handleSendMessageToBackground}
      >
        Send Message to Background
      </Button>
      <Box>
        <Link href="/sample">
          <a className="text-blue-500 underline">to sample page</a>
        </Link>
      </Box>
    </Box>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
