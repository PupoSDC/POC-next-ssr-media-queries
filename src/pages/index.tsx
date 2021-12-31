import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { AppContainer } from "src/containers/AppContainer";
import { AddressesTable } from "src/containers/AddressesTable";

const IndexPage: NextPage = () => {
  return (
    <AppContainer title={"The only Page"}>
      <ul>
        <li>
          <Link href="/hook-media-query">
            <a>hook media query</a>
          </Link>
        </li>
        <li>
          <Link href="/fresnel">
            <a>fresnel</a>
          </Link>
        </li>
        <li>
          <Link href="/home-brew">
            <a>home brew</a>
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
