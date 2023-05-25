import { Box } from "@mui/material";
import PerImage from "../components/pricing/PerImage";
import PerHour from "../components/pricing/PerHour";

const Pricing = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      px={{ xs: 0, md: 3, lg: 15 }}
      py={{ xs: 5, md: 10, lg: 15, xl: 20 }}
    >
      <PerImage />
      <PerHour />
    </Box>
  );
};

export default Pricing;
