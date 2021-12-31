import { Grid } from "@mui/material";
import { AddressesTable } from "./AddressesTable";
import { UserProfile } from "./UserProfile";

export const HomePageDesktop = () => (
  <Grid container>
    <Grid item xs={3}>
      <UserProfile />
    </Grid>
    <Grid item xs={9}>
      <AddressesTable />
    </Grid>
  </Grid>
);
