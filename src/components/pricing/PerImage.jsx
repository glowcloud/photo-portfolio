import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const PerImage = () => {
  const imageRates = [
    { quantity: "1-4", price: "min. 5 ordered images" },
    { quantity: "5-9", price: "$25.00" },
    { quantity: "10-19", price: "$20.00" },
    { quantity: "20-49", price: "$15.00" },
    { quantity: "50-99", price: "$13.00" },
    { quantity: "100-199", price: "$10.00" },
    { quantity: "200+", price: "$7.00" },
  ];

  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={2}
      mb={{ xs: 2, md: 0 }}
    >
      <Typography variant="h5" gutterBottom>
        Per Image
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Price (Per Image)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {imageRates.map((row) => (
              <TableRow
                key={row.quantity}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.quantity}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PerImage;
