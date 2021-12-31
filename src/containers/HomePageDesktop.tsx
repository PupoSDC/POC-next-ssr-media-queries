import { Grid } from "@mui/material";
import { AddressesTable } from "./AddressesTable";
import { UserProfile } from "./UserProfile";

export const HomePageDesktop = () => (
  <Grid container>
    <Grid item xs={0} display={{ xs: "none", sm: "block" }} sm={3}>
      <UserProfile />
    </Grid>
    <Grid item xs={12} sm={9}>
      <AddressesTable />
    </Grid>
  </Grid>
);
