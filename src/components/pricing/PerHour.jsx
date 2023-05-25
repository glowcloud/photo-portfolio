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

const PerHour = () => {
  const hourlyRates = [
    { duration: "Per hour", price: "$150.00" },
    { duration: "Half-day (4 hours)", price: "$500" },
    { duration: "Full Day (8 hours)", price: "$800" },
  ];

  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={2}
    >
      <Typography variant="h5" gutterBottom>
        Per Hour
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Duration</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hourlyRates.map((row) => (
              <TableRow
                key={row.duration}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.duration}
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

export default PerHour;
