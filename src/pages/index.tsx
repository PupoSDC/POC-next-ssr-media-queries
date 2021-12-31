import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { AppContainer } from "src/containers/AppContainer";
import { AddressesTable } from "src/containers/AddressesTable";

const IndexPage: NextPage = () => {
  return (
    <AppContainer title={"The only Page"}>
      <ul>
        <li>
          <Link href="/example-0">
            <a>Example 0: Css and no preloading</a>
          </Link>
        </li>
        <li>
          <Link href="/example-1">
            <a>Example 1: Css based components</a>
          </Link>
        </li>
        <li>
          <Link href="/example-2">
            <a>Example 2: media query hook</a>
          </Link>
        </li>
        <li>
          <Link href="/example-3">
            <a>Example 3: Fresnel</a>
          </Link>
        </li>
        <li>
          <Link href="/example-4">
            <a>Example 4: media query hook with pre-fetching</a>
          </Link>
        </li>
        <li>
          <Link href="/example-5">
            <a>Example 5: media query hook with smart pre-fetching</a>
          </Link>
        </li>
        <li>
          <Link href="/example-6">
            <a>Example 6: fresnel with smart pre-fetching</a>
          </Link>
        </li>
      </ul>
    </AppContainer>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default IndexPage;
