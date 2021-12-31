import { GetServerSideProps, NextPage } from "next";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { dehydrate, QueryClient } from "react-query";
import { HomePageDesktop } from "src/containers/HomePageDesktop";
import { HomePageMobile } from "src/containers/HomePageMobile";
import { Media } from "src/theme";
import { prefetchAddresses } from "src/queries/useAdresses";
import { prefetchUserData } from "src/queries/useUserData";

const MATCH_MOBILE_USER_AGENTS =
  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

const IndexPage: NextPage = () => {
  return (
    <AppContainer title={"Example 6: fresnel with smart pre-fetching"}>
      <Media at="xs">
        <HomePageDesktop />
      </Media>
      <Media greaterThanOrEqual="sm">
        <HomePageMobile />
      </Media>
    </AppContainer>
  );
};

export const getServerSideProps: GetServerSideProps<
  ReactQueryPageProps
> = async ({ req }) => {
  const queryClient = new QueryClient();
  const userAgent = req.headers["user-agent"];
  const isDesktop =
    userAgent && !Boolean(userAgent.match(MATCH_MOBILE_USER_AGENTS));

  await Promise.all([
    prefetchAddresses(queryClient),
    isDesktop && prefetchUserData(queryClient),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
