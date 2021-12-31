import { GetServerSideProps, NextPage } from "next";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { dehydrate, QueryClient } from "react-query";
import { HomePageDesktop } from "src/containers/HomePageDesktop";
import { Theme, useMediaQuery } from "@mui/material";
import { HomePageMobile } from "src/containers/HomePageMobile";
import { prefetchAddresses } from "src/queries/useAdresses";
import { prefetchUserData } from "src/queries/useUserData";

const IndexPage: NextPage = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return (
    <AppContainer title={"Example 4: media query hook with pre-fetching"}>
      {isDesktop ? <HomePageDesktop /> : <HomePageMobile />}
    </AppContainer>
  );
};

export const getServerSideProps: GetServerSideProps<
  ReactQueryPageProps
> = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    prefetchAddresses(queryClient),
    prefetchUserData(queryClient),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
