import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";

const MasonryList = ({ images, handleOpen, handleClose }) => {
  const isExtraSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const getColumns = () => (isExtraSmallScreen ? 1 : isSmallScreen ? 2 : 3);

  return (
    <ImageList variant="masonry" cols={getColumns()} gap={10}>
      {images.map((image, index) => (
        <ImageListItem
          key={index}
          onClick={() => {
            handleOpen(index);
          }}
          sx={{
            pointerEvents: { xs: "none", sm: "auto" },
            "&:hover": {
              cursor: "pointer",
              opacity: 0.75,
              transition: "opacity 300ms ",
            },
          }}
        >
          <img src={image} alt={`Image ${index}`} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MasonryList;
