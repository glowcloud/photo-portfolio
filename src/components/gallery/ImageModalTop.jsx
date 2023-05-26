import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModalTop = ({ text, handleClose }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="end" px={5}>
      <Typography fontSize="large" sx={{ color: "#eee", pb: "12px" }}>
        {text}
      </Typography>
      <IconButton size="large" onClick={handleClose}>
        <CloseIcon fontSize="inherit" sx={{ color: "#eee" }} />
      </IconButton>
    </Box>
  );
};

export default ImageModalTop;
