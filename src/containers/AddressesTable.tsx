import { FunctionComponent } from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAddresses } from "src/queries/useAddresses";

export const AddressesTable: FunctionComponent = () => {
  const addresses = useAddresses();

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>building_number</TableCell>
              <TableCell>city</TableCell>
              <TableCell>city_prefix</TableCell>
              <TableCell>city_suffix</TableCell>
              <TableCell>community</TableCell>
              <TableCell>country</TableCell>
              <TableCell>country_code</TableCell>
              <TableCell>full_address</TableCell>
              <TableCell>latitude</TableCell>
              <TableCell>longitude</TableCell>
              <TableCell>mail_box</TableCell>
              <TableCell>postcode</TableCell>
              <TableCell>secondary_address</TableCell>
              <TableCell>state</TableCell>
              <TableCell>state_abbr</TableCell>
              <TableCell>street_address</TableCell>
              <TableCell>street_name</TableCell>
              <TableCell>street_suffix</TableCell>
              <TableCell>time_zone</TableCell>
              <TableCell>uid</TableCell>
              <TableCell>zip</TableCell>
              <TableCell>zip_code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.building_number}
                </TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.city_prefix}</TableCell>
                <TableCell>{row.city_suffix}</TableCell>
                <TableCell>{row.community}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.country_code}</TableCell>
                <TableCell>{row.full_address}</TableCell>
                <TableCell>{row.latitude}</TableCell>
                <TableCell>{row.longitude}</TableCell>
                <TableCell>{row.mail_box}</TableCell>
                <TableCell>{row.postcode}</TableCell>
                <TableCell>{row.secondary_address}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.state_abbr}</TableCell>
                <TableCell>{row.street_address}</TableCell>
                <TableCell>{row.street_name}</TableCell>
                <TableCell>{row.street_suffix}</TableCell>
                <TableCell>{row.time_zone}</TableCell>
                <TableCell>{row.uid}</TableCell>
                <TableCell>{row.zip}</TableCell>
                <TableCell>{row.zip_code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
