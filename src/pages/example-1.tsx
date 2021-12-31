import { dehydrate, QueryClient } from "react-query";
import { GetServerSideProps, NextPage } from "next";
import { styled } from "@mui/material";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { HomePageDesktop } from "src/containers/HomePageDesktop";
import { HomePageMobile } from "src/containers/HomePageMobile";

const MobileOnly = styled("div")(({ theme }) => ({
  all: "inherit",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const DesktopOnly = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    all: "inherit",
  },
}));

const IndexPage: NextPage = () => {
  return (
    <AppContainer title={"Example 1: Css based components"}>
      <DesktopOnly>
        <HomePageDesktop />
      </DesktopOnly>
      <MobileOnly>
        <HomePageMobile />
      </MobileOnly>
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
