import { GetServerSideProps, NextPage } from "next";
import { Theme, useMediaQuery } from "@mui/material";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { dehydrate, QueryClient } from "react-query";
import { HomePageDesktop } from "src/containers/HomePageDesktop";
import { HomePageMobile } from "src/containers/HomePageMobile";
import { prefetchAddresses } from "src/queries/useAddresses";
import { prefetchUserData } from "src/queries/useUserData";

const MATCH_MOBILE_USER_AGENTS =
  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

type IndexPageProps = ReactQueryPageProps & {
  isDesktopDeviceDetected: boolean
}

const IndexPage: NextPage<IndexPageProps> = ({
  isDesktopDeviceDetected
}) => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"), {
    defaultMatches: isDesktopDeviceDetected,
  });

  return (
    <AppContainer title={"Example 5: media query hook with smart pre-fetching"}>
      {isDesktop ? <HomePageDesktop /> : <HomePageMobile />}
    </AppContainer>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({ req }) => {
  const queryClient = new QueryClient();
  const userAgent = req.headers["user-agent"];
  const isDesktop =
    !!userAgent && !Boolean(userAgent.match(MATCH_MOBILE_USER_AGENTS));

  await Promise.all([
    prefetchAddresses(queryClient),
    isDesktop && prefetchUserData(queryClient),
  ]);

  return {
    props: {
      isDesktopDeviceDetected: isDesktop,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
