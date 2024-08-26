import type { CustomNextPage } from "next";
import Link from "next/link";
import { Layout } from "src/layout";

const SamplePage: CustomNextPage = () => {
  return (
    <div>
      <h1>Welcome Sample Page!</h1>
      <Link href="/">
        <a>go back index page</a>
      </Link>
    </div>
  );
};

export default SamplePage;

SamplePage.getLayout = Layout;
