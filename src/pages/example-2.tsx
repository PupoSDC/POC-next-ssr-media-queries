import { GetServerSideProps, NextPage } from "next";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { dehydrate, QueryClient } from "react-query";
import { HomePageDesktop } from "src/containers/HomePageDesktop";
import { Theme, useMediaQuery } from "@mui/material";
import { HomePageMobile } from "src/containers/HomePageMobile";

const IndexPage: NextPage = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return (
    <AppContainer title={"Example 2: media query hook"}>
      {isDesktop ? <HomePageDesktop /> : <HomePageMobile />}
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
