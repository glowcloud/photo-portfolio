import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ImageModalNext = ({ imagesLength, setCurrentIndex }) => {
  return (
    <Box
      width="100%"
      height={{ xs: "90vh", md: "75vh" }}
      display="flex"
      justifyContent="left"
      alignItems="center"
      pl={3}
      onClick={() =>
        setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex + 1;
          if (newIndex === imagesLength) newIndex = 0;
          return newIndex;
        })
      }
      sx={{
        "&:hover": {
          cursor: "pointer",
          opacity: 0.75,
          transition: "opacity 300ms",
        },
      }}
    >
      <NavigateNextIcon fontSize="large" sx={{ color: "#eee" }} />
    </Box>
  );
};

export default ImageModalNext;
