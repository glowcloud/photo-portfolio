import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModalTop = ({ text, handleClose }) => {
  return (
    <Box
      width={{ sm: 480, md: 800, lg: 900, xl: 1200 }}
      display="flex"
      justifyContent="space-between"
      alignItems="end"
    >
      <Typography fontSize="large" sx={{ color: "#eee", pl: 2, pb: "12px" }}>
        {text}
      </Typography>
      <IconButton size="large" onClick={handleClose}>
        <CloseIcon fontSize="inherit" sx={{ color: "#eee" }} />
      </IconButton>
    </Box>
  );
};

export default ImageModalTop;
