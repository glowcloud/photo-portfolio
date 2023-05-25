import { Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ImageModalPrev = ({ imagesLength, setCurrentIndex }) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="right"
      alignItems="center"
      pr={3}
      onClick={() =>
        setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex - 1;
          if (newIndex < 0) newIndex = imagesLength - 1;
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
      <NavigateBeforeIcon fontSize="large" sx={{ color: "#eee" }} />
    </Box>
  );
};

export default ImageModalPrev;
