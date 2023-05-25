import { Box, Grid } from "@mui/material";

const ImageModalPreview = ({ images, currentIndex, setCurrentIndex }) => {
  const getNavigationIndexes = () => {
    return [
      currentIndex - 2 < 0
        ? currentIndex - 2 + images.length
        : currentIndex - 2,
      currentIndex - 1 < 0
        ? currentIndex - 1 + images.length
        : currentIndex - 1,
      currentIndex,
      currentIndex + 1 >= images.length
        ? currentIndex + 1 - images.length
        : currentIndex + 1,
      currentIndex + 2 >= images.length
        ? currentIndex + 2 - images.length
        : currentIndex + 2,
    ];
  };

  return (
    <Grid
      container
      display={{ sm: "none", md: "flex" }}
      alignItems="center"
      justifyContent="center"
      width={{ md: 900, xl: 1200 }}
      my={2}
    >
      {getNavigationIndexes().map((index) => (
        <Grid
          item
          md={2}
          mx={0.5}
          key={index}
          onClick={() => setCurrentIndex(index)}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            src={images[index]}
            alt={`Image ${index}`}
            loading="lazy"
            width={{ md: 150, xl: 200 }}
            height={100}
            sx={{
              objectFit: "cover",
              opacity: index === currentIndex ? 1 : 0.5,
              "&:hover": {
                opacity: 1,
                transition: "opacity 300ms",
                cursor: "pointer",
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageModalPreview;
