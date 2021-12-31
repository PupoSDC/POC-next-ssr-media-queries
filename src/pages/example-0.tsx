import { dehydrate, QueryClient } from "react-query";
import { GetServerSideProps, NextPage } from "next";
import { Grid } from "@mui/material";
import { AppContainer } from "src/containers/AppContainer";
import { ReactQueryPageProps } from "src/types/Next";
import { UserProfile } from "src/containers/UserProfile";
import { AddressesTable } from "src/containers/AddressesTable";

const IndexPage: NextPage = () => {
  return (
    <AppContainer title={"Example 0: Css and no preloading"}>
      <Grid container>
        <Grid item xs={0} display={{ xs: "none", sm: "block" }} sm={3}>
          <UserProfile />
        </Grid>
        <Grid item xs={12} sm={9}>
          <AddressesTable />
        </Grid>
      </Grid>
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
