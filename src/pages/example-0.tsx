import { GetServerSideProps, NextPage } from "next";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { dehydrate, QueryClient } from "react-query";
import { HomePageDesktop } from "src/containers/HomePageDesktop";

const IndexPage: NextPage = () => {
  return (
    <AppContainer title={"Example 0: Css and no preloading"}>
      <HomePageDesktop />
    </AppContainer>
  );
};

export const getServerSideProps: GetServerSideProps<
  ReactQueryPageProps
> = async () => {
  const queryClient = new QueryClient();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
